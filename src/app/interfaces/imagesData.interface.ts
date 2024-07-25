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