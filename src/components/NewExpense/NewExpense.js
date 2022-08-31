import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
  const userExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    }
    onAddExpense(expenseData)
  }
  
  return <div className="new-expense">
    <ExpenseForm userExpenseData={userExpenseDataHandler}/>
  </div>;
};

export default NewExpense;
