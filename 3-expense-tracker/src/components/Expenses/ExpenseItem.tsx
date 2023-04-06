import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
interface Props {
  title: string;
  amount: number;
  date: Date;
}
function ExpenseItem(props: Props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={() => alert("clicked")}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
