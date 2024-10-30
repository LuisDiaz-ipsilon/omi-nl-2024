export interface Archivo {
    filename: string;
    path: string;
    mimetype: string;
    owner: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  }
  
export interface Usuario {
    firstName: string;
    lastNameP: string;
    lastNameM: string;
    email: string;
    school: string;
    schoolLevel: string;
    schoolYear: number;
    bachilleratoType: string;
    birthDate: string;
    omegaUser: string;
    pass: string;
    isActive: boolean;
    roles: string[];
    createdAt: string;
    updatedAt: string;
    id: string;
}
  

export interface UsuarioArchivos {
    usuario: Usuario;
    archivos: Archivo[];
}
  