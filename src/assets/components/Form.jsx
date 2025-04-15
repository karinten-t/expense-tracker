import { useState } from 'react';

function Form({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.description || !formData.amount || !formData.date || !formData.category) {
      alert('Please fill in all fields');
      return;
    }

    const newExpense = {
      ...formData,
      amount: Number(formData.amount),
      id: Date.now()
    };

    onAddExpense(newExpense);

    
    setFormData({
      description: '',
      amount: '',
      date: '',
      category: ''
    });
  };

  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g. Gym Membership"
          />
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="e.g. 4500"
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Housing">Housing</option>
            <option value="Transportation">Transportation</option>
          </select>
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default Form;