// oxlint-disable jest/no-conditional-expect
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductById, getProductsAction } from '@/modules/products/actions';

describe('getProductById', () => {
  test('should return empty product on create argument', async () => {
    const product = await getProductById('create');

    expect(product).toEqual({
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
    });
  });

  test('should return a product if ID is found', async () => {
    const products = await getProductsAction();
    const product = await getProductById(products[0]!.id);

    expect(product).toEqual({
      ...products[0],
      images: expect.arrayContaining(products[0]!.images),
    });
  });

  test('should return empty product if ID is not found', async () => {
    try {
      await getProductById('XXXX');
      expect(true).toBe(false);
    } catch (error: any) {
      expect(error.message).toBe('Error getting product by id XXXX');
    }
  });
});
