export interface ExpenseData {
  id?: number;
  expenseTitle: string;
  expenseAmount: number;
  expenseDate: Date;
}
export interface ExpenseFormData {
  title: string;
  amount: number;
  date: Date;
}
export interface ExpenseFilterData {
  selectedYear: string;
}

export interface ExpenseFilterProps {
  onChangeFilter: (selectedYear: string) => void;
  selected: string;
}
