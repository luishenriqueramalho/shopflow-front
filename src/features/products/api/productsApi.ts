import { httpClient } from '@/services/http/client';
import { Product } from '../domain/product.types';

export const productsApi = {
  async getProducts(): Promise<Product[]> {
    const response = await httpClient.get<Product[]>('/products');
    return response.data;
  },

  async getProductById(id: string): Promise<Product> {
    const response = await httpClient.get<Product>(`/products/${id}`);
    return response.data;
  },
};
