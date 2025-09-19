import { createAction } from "@reduxjs/toolkit"
import { ProductType } from "@type/Product.types";

export type ToggleLikePayloadType = { productId: ProductType['$id'] };

const FavoritesActions = {
    toggleLike: createAction<ToggleLikePayloadType>('favorites/toggleLike')
}

export default FavoritesActions