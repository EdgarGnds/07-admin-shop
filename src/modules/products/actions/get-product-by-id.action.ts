// oxlint-disable no-unused-vars
/* eslint-disable @typescript-eslint/no-explicit-any */
import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductById = async (productId: string): Promise<Product> => {
  if (productId === 'create') {
    return {
      id: '',
      title: '',
      description: '',
      price: 0,
      stock: 0,
      slug: '',
      sizes: [],
      gender: '' as any,
      tags: [],
      images: [],
      user: {} as any,
    };
  }

  try {
    const { data } = await tesloApi.get<Product>(`/products/${productId}`);
    return {
      ...data,
      images: data.images.map(getProductImageAction),
    };
  } catch (error) {
    // console.log(error);
    throw new Error(`Error getting product by id ${productId}`);
  }
};
