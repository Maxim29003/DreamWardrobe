import { ProductType } from '@type/Product.types';
import { ProductCardType } from '@type/ProductCard.type';
import { ProductBasketCardType } from '@type/ProductBasketCardType';

export function toProductCard(product: ProductType): ProductCardType {
  return {
    id: product.$id,
    name: product.name,
    price: product.price,
    photos: product.photos,
    like: false,
  };
}

export const toProductBasketCard = (
  product: ProductType,
  countProduct: number = 1,
): ProductBasketCardType => {
  return {
    id: product.$id,
    name: product.name,
    price: product.price,
    photos: product.photos,
    color: product.color,
    size: product.size,
    countProduct,
  };
};
