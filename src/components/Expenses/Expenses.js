import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });

  let expensescontent = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensescontent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensescontent}
      </Card>
    </div>
  );
};

export default Expenses;
