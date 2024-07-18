import React, { useState } from 'react';

function FaturaForm({ onSubmit }) {
  const [customer, setCustomer] = useState('');
  const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);

  const handleItemChange = (index, field, value) => {
    const newItems = items.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customer, items });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Müşteri</label>
        <input 
          type="text" 
          className="form-control" 
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
      </div>
      {items.map((item, index) => (
        <div key={index} className="mb-3">
          <label className="form-label">Item {index + 1}</label>
          <input 
            type="text" 
            className="form-control mb-2" 
            placeholder="Description"
            value={item.description}
            onChange={(e) => handleItemChange(index, 'description', e.target.value)}
            required
          />
          <input 
            type="number" 
            className="form-control mb-2" 
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
            required
          />
          <input 
            type="number" 
            className="form-control mb-2" 
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleItemChange(index, 'price', e.target.value)}
            required
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Yeni Fatura</button>
    </form>
  );
}

export default FaturaForm;
