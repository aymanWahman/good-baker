import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const { name, price, stock, image } = req.body;
    const product = await prisma.product.create({
      data: { name, price: Number(price), stock: Number(stock), image },
    });
    res.status(201).json(product);
  }
}