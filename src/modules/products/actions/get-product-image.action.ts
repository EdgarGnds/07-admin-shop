export const getProductImageAction = (imageName: string): string => {
  if (imageName.includes('http')) {
    const parts = imageName.split('/');
    const filename = parts[parts.length - 1];
    return `${import.meta.env.VITE_TESLO_API_URL}/files/product/${filename}`;
  }
  return `${import.meta.env.VITE_TESLO_API_URL}/files/product/${imageName}`;
};
