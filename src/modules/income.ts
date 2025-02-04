import { transactionProps } from "../interfaces/transactionProps.js";

class Income implements transactionProps {
  constructor(
    public description: string,
    public amount: number,
    public date: string
  ) {}
}

export default Income;
