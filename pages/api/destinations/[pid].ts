import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import products from '../../../utils/data/destinations';

const fn= (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req

  const product = products.find((x: { id: string | string[]; }) => x.id === pid);
  res.status(200).json(product);
}
export default fn;