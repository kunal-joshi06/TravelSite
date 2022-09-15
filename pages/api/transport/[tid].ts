import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import products from '../../../utils/data/transport';

const fn= (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { tid },
  } = req

  const product = products.find((x: { id: string | string[]; }) => x.id === tid);
  res.status(200).json(product);
}
export default fn;
