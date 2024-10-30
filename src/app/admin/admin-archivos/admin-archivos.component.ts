import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Archivo, Usuario, UsuarioArchivos } from 'src/app/interfaces/archivos-admin.interface';
import { ArchivosService } from 'src/app/services/archivos.service';
import { ArhivosAdminService } from 'src/app/services/arhivos-admin.service';

@Component({
  selector: 'app-admin-archivos',
  templateUrl: './admin-archivos.component.html',
  styleUrls: ['./admin-archivos.component.scss']
})
export class AdminArchivosComponent {
  usuariosArchivos: UsuarioArchivos[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private archivosAdminService: ArhivosAdminService,
    private archivosService: ArchivosService
  ) {}

  ngOnInit(): void {
    this.cargarArchivosPorUsuario();
  }

  cargarArchivosPorUsuario(): void {
    this.isLoading = true;
    this.archivosAdminService.getFiles().subscribe({
      next: (archivos: Archivo[]) => {
        // Agrupar archivos por propietario
        const archivosPorUsuario = this.agruparArchivosPorUsuario(archivos);
        const uniqueEmails = Object.keys(archivosPorUsuario);

        // Crear un array de observables para obtener datos de cada usuario
        const observables = uniqueEmails.map(email =>
          this.archivosAdminService.getUserData(email)
        );

        // Ejecutar todas las solicitudes de datos de usuario en paralelo
        forkJoin(observables).subscribe({
          next: (usuarios: Usuario[]) => {
            this.usuariosArchivos = usuarios.map((usuario, index) => ({
              usuario,
              archivos: archivosPorUsuario[uniqueEmails[index]]
            }));
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error al obtener datos de usuarios', error);
            this.errorMessage = 'Error al cargar los datos de los usuarios.';
            this.isLoading = false;
          }
        });
      },
      error: (error) => {
        console.error('Error al obtener archivos', error);
        this.errorMessage = 'Error al cargar los archivos.';
        this.isLoading = false;
      }
    });
  }

  agruparArchivosPorUsuario(archivos: Archivo[]): { [email: string]: Archivo[] } {
    return archivos.reduce((acc, archivo) => {
      if (!acc[archivo.owner]) {
        acc[archivo.owner] = [];
      }
      acc[archivo.owner].push(archivo);
      return acc;
    }, {} as { [email: string]: Archivo[] });
  }

  descargarArchivo(id: string, filename: string): void {
    this.archivosService.downloadFile(id).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Error al descargar el archivo', error);
        alert('Error al descargar el archivo.');
      }
    });
  }

  obtenerNombreCompleto(usuario: Usuario): string {
    return `${usuario.firstName} ${usuario.lastNameP} ${usuario.lastNameM}`;
  }
}
