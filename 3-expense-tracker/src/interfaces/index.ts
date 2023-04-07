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
