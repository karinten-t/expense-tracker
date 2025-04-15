import { useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import Tables from './assets/components/Tables';



function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Gym Membership",
      amount: 4500,
      date: "2025-05-01",
      category: "Health"
    },
    {
      id: 2,
      description: "Movie Tickets",
      amount: 3000,
      date: "2025-04-15",
      category: "Entertainment"
    },
    {
      id: 3,
      description: "Internet Bill",
      amount: 7500,
      date: "2025-04-10",
      category: "Utilities"
    },
    {
      id: 4,
      description: "New Shoes",
      amount: 12500,
      date: "2025-04-12",
      category: "Clothing"
    }
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>
      <p> start taking control of your finances and life, records, track and analyze your spending</p>
      <div className="expense-tracker-content">
        <Form onAddExpense={handleAddExpense} />

        <Tables
          expenses={expenses} onDeleteExpense={handleDeleteExpense} 
        />
      </div>
    </div>
  )
}

export default App;