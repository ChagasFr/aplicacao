import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulado uma demora de 6 segundos
  const demora = 6000;
  const inicio = Date.now();
  while (Date.now() - inicio < demora) {}

  res.status(200).json([
    { id: 1, nome: "Caneta", preco: 7.32 },
    { id: 2, nome: "Lapis", preco: 2.32 },
    { id: 3, nome: "Caderno", preco: 10.32 },
  ]);
}
