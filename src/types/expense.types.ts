export interface ExpenseType {
  _id: string;
  date: string;
  item: string;
  value: number;
  additionalInfo: {
    observation?: string;
  };
}
