import { productsAdapter } from "@store/reducers/entities/product.reducer";
import { RootState } from "@store/store";
import { ProductType } from "@type/Product.types";



const productsSelectors = productsAdapter.getSelectors(
    (state: RootState) =>  state.products
);

const productByIdSelector = (id: ProductType['$id']) => (state: RootState) =>
    productsSelectors.selectById(state, id);

const productIdsSelector = (state: RootState): ProductType['$id'][] =>{
    console.log("Product selector ids")
    return productsSelectors.selectIds(state);
}

const productsStatusSelector = (state: RootState) => {
    console.log("Product selector status")
    return state.products.status;
}

const productsErrorSelector = (state: RootState) => {
    console.log("Product selector error")
    return state.products.error;
}

const idsBySearch = (search: string) => (state: RootState) => {
    return productsSelectors.selectAll(state).filter(product => product.name.toLowerCase().includes(search.toLowerCase())).map(product => product.$id);
}

const ProductsSelectors = {
    ids: productIdsSelector,
    idsBySearch,
    selectById: productByIdSelector,
    status: productsStatusSelector,
    error: productsErrorSelector,
    products: productsSelectors.selectAll,
}

export default ProductsSelectors