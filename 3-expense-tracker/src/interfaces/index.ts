export interface ExpenseData {
  id?: number;
  expenseTitle: string;
  expenseAmount: number;
  expenseDate: Date;
}
export interface ExpenseListProps {
  items: {
    id: number;
    date: Date;
    title: string;
    amount: number;
  }[];
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
