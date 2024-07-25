import { Injectable } from '@angular/core';

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../src/environments/environment';
import { ImagesData } from '../interfaces/imagesData.interface';
import { from, map, mergeMap, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private supabase: SupabaseClient;

  constructor(private http: HttpClient) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async uploadImage(file: File): Promise<string | null> {
    try {
      const filename = `${Date.now()}_${file.name}`;
      const { data, error } = await this.supabase.storage
        .from('images')
        .upload(filename, file);

      if (error) throw error;

      const { data: urlData } = this.supabase.storage
        .from('images')
        .getPublicUrl(filename);

      return urlData.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }

  async deleteImage(filename: string): Promise<void> {
    try {
      const { error } = await this.supabase.storage
        .from('images')
        .remove(['/'+filename]);

      if (error) throw error;
      console.log('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }

  async getImageList(): Promise<ImagesData[]> {
    try {
      const { data, error } = await this.supabase
        .from('images')
        .select('*')
        .eq('active', true)
        .eq('type', 1);

      if (error) {
        throw error;
      }

      //console.log('Datos obtenidos:', data);
      return data as ImagesData[];
    } catch (error) {
      console.error('Error al obtener la lista de imágenes:', error);
      return [];
    }
  }

  async getImages(): Promise<string[]> {
    let imageLinks: string[] = [];

    // Obtén todos los archivos del bucket 'images'
    const { data, error } = await this.supabase.storage.from('images').list();

    if (error) {
      console.error('Error fetching images:', error);
      return [];
    }

    if (data) {
      for (const file of data) {
        const { data: publicUrlData } = this.supabase.storage.from('images').getPublicUrl(file.name);
        if (publicUrlData) {
          imageLinks.push(publicUrlData.publicUrl);
        }
      }
    }

    return imageLinks;
  }

  getSignedUrl(path: string): Observable<string> {
    return from(this.supabase.storage.from('images').createSignedUrl(path, 60 * 60)) // 60 minutos
      .pipe(
        map(response => {
          if (response.error) {
            throw new Error(response.error.message);
          }
          return response.data.signedUrl;
        })
      );
  }




}
