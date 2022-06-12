import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpenseData(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="add_btn" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveDataHandler} />}
    </div>
  );
};

export default NewExpense;
