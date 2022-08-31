import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpenseButtonHandler = () => {
    setIsEditing(true);
  };
  const cancelExpenseHandler = () => {
    setIsEditing(false)
  }

  const userExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm userExpenseData={userExpenseDataHandler} cancelExpenseHandler={cancelExpenseHandler}/>}
    </div>
  );
};

export default NewExpense;
