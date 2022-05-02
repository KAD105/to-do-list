import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Coffee Machine",
      amount: 112.42,
      date: new Date(2022, 2, 16),
    },
    {
      id: "e2",
      title: "Fire Extinguisher",
      amount: 102.65,
      date: new Date(2022, 1, 12),
    },
    {
      id: "e3",
      title: "External Hard Drive",
      amount: 120.67,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e4",
      title: "Apple Notebook",
      amount: 844.33,
      date: new Date(2021, 7, 4),
    },
  ];

  const addExpenseDataHandler = (expenses) => {
    console.log("im in the App.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
