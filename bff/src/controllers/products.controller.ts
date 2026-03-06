import { Request, Response } from 'express';
import { productsMock } from '../data/products.mock';

export const getProducts = (_request: Request, response: Response): void => {
  response.status(200).json(productsMock);
};

export const getProductById = (request: Request, response: Response): void => {
  const { id } = request.params;

  const product = productsMock.find(item => item.id === id);

  if (!product) {
    response.status(404).json({
      message: 'Produto não encontrado',
    });
    return;
  }

  response.status(200).json(product);
};
