import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((expenseItem) => {
        return (
          <ExpenseItem
            key={expenseItem.id}
            desc={expenseItem.description}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
