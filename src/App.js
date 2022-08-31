import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import DUMYY_EXPENSES from "./expenses";

const App = () => {
  const [newExpense, setNewExpense] = useState(DUMYY_EXPENSES);

  const addNewExpenseHandler = (expense) => {
    setNewExpense((prevExpense) => {
      console.log(expense)
      return [expense, ...prevExpense];
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
