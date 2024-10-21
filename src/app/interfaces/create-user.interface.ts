export interface createUser {
    firstName: string,
    lastNameP: string;
    lastNameM: string;
    email: string;
    school: string;
    schoolLevel: string;
    schoolYear: number; // Mejor usar número para el año escolar
    bachilleratoType?: string;
    birthDate: Date;
    omegaUser: string;
    pass?: string;
    roles: string[];
}
