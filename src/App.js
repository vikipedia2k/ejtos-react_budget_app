import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 300 },
    { id: 3, name: "Transportation", cost: 70 },
    { id: 4, name: "Fuel", cost: 40 },
  ]);

  const [budget, setBudget] = useState(1000);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget budget={budget} />
        </div>
        <div className="col-sm">
          <Remaining budget={budget} expenses={expenses} />
        </div>
        <div className="col-sm">
          <ExpenseTotal expenses={expenses} />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm addExpense={addExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
