export interface ImagesData {
  id: number;
  name: string;
  title: string;
  active: boolean;
  type: number;
  url?: string;
}

export interface ImageObject {
  src: string;
  alt: string;
  caption: string;
}

// src/app/interfaces/image.interface.ts
export interface ImageAdminBENest {
  id: string;
  filename: string;
  path: string;
  mimetype: string;
  uploadedBy: string;
  title?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}
