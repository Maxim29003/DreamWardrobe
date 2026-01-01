import { Models } from 'appwrite';

export interface ProductType extends Models.Document {
  $id: string;
  name: string;
  price: number;
  photos: string[];
  size: string;
  color: string;
  sizes: string[];
  colors: string[];
}
