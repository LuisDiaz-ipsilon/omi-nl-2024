// notas.component.ts
import { Component, OnInit } from '@angular/core';
import { ArchivosService } from 'src/app/services/archivos.service';
import { saveAs } from 'file-saver'; // Necesitarás instalar este paquete: npm install file-saver

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss'],
})
export class NotasComponent implements OnInit {
  selectedFile: File | null = null;
  archivos: any[] = [];

  constructor(private archivosService: ArchivosService) {}

  ngOnInit(): void {
    this.obtenerArchivos();
  }

  // Método para manejar la selección de un archivo
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] || null;
  }

  // Método para subir el archivo seleccionado
  subirArchivo(): void {
    if (this.selectedFile) {
      this.archivosService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          alert('Archivo subido exitosamente');
          this.selectedFile = null;
          this.obtenerArchivos(); // Actualizar la lista de archivos
        },
        (error) => {
          console.error(error);
          alert('Error al subir el archivo');
        }
      );
    } else {
      alert('Por favor, selecciona un archivo');
    }
  }

  // Método para obtener la lista de archivos del usuario
  obtenerArchivos(): void {
    this.archivosService.getMyFiles().subscribe(
      (data) => {
        this.archivos = data;
      },
      (error) => {
        console.error(error);
        alert('Error al obtener los archivos');
      }
    );
  }

  // Método para descargar un archivo
  descargarArchivo(id: string, filename: string): void {
    this.archivosService.downloadFile(id).subscribe(
      (blob) => {
        saveAs(blob, filename);
      },
      (error) => {
        console.error(error);
        alert('Error al descargar el archivo');
      }
    );
  }
}
