import React ,{useState}from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear,setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear)=> {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter(expense=> {
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <Card className="expenses">
      <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expenseItem) => {
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
