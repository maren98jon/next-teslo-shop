'use server';

import { getPaginatedProductsWithImages } from './products/product-pagination';
import { getProductBySlug } from './products/get-product-by-slug';
import { getStockBySlug } from './products/get-stock-by-slug';

export {
    getPaginatedProductsWithImages,
    getProductBySlug,
    getStockBySlug,
};