import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p style={{color:'white'}}>No expenses founded</p>
      ) : (
        filteredExpenses.map((expenseItem) => {
          return (
            <ExpenseItem
              key={expenseItem.id}
              desc={expenseItem.description}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          );
        })
      )}
    </Card>
  );
};

export default Expenses;
