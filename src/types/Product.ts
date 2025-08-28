import { Models } from 'appwrite';

export interface Product extends Models.Document {
  name: string;
  price: number;
  photos: string[];
  size: string;
  color: string;
  like: boolean;
}
