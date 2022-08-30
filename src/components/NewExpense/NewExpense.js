import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
  const userExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData)
  }
  
  return <div className="new-expense">
    <ExpenseForm userExpenseData={userExpenseDataHandler}/>
  </div>;
};

export default NewExpense;
