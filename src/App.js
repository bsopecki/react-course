import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseItems = [
    {
      id: 1,
      date: new Date(2021, 2, 28),
      description: "Car Insurance",
      amount: 265.45,
    },
    {
      id: 2,
      date: new Date(2021, 3, 21),
      description: "Udemy courses",
      amount: 250,
    },
    {
      id: 3,
      date: new Date(2021, 3, 26),
      description: "Bills",
      amount: 190.48,
    },
    {
      id: 4,
      date: new Date(2021, 4, 1),
      description: "Books",
      amount: 105.25,
    },
    {
      id: 5,
      date: new Date(2021, 4, 10),
      description: "Neew shoes",
      amount: 50,
    },
    {
      id: 6,
      date: new Date(2022, 2, 20),
      description: "Dental care",
      amount: 565.45,
    },
    {
      id: 6,
      date: new Date(2022, 3, 28),
      description: "Cinema",
      amount: 150.85,
    },
    {
      id: 7,
      date: new Date(2022, 4, 15),
      description: "Family day",
      amount: 350,
    },
  ];
  return (
    <div>
      {expenseItems.map((expenseItem) => {
        return (
          <ExpenseItem
            id={expenseItem.id}
            desc={expenseItem.description}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })}
    </div>
  );
}

export default App;
