import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenseItems from "./expenses";

const App = () => {
  const [newExpense, setNewExpense] = useState(expenseItems);
  const addNewExpenseHandler = (expense) => {
    setNewExpense((prevState) => {
      return [...prevState,expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseHandler} />
      <Expenses items={newExpense} />
    </div>
  );
};

export default App;
