import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import Category from "./Category";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Utility" },
    { id: 2, description: "Cloths", amount: 50, category: "Groceries" },
    { id: 3, description: "Movies", amount: 200, category: "Entertainment" },
    { id: 4, description: "furniture", amount: 530, category: "Groceries" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const original = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      </div>

      <ExpenseList
        expenses={original}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
