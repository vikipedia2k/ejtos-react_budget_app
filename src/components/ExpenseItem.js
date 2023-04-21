import React from 'react';

const ExpenseItem = ({ expense }) => {
  const { id, name, cost } = expense;

  return (
    <li className="list-group-item">
      <div className="expense-item d-flex justify-content-between align-items-center">
        <div>
          <h6 className="expense-name">{name}</h6>
          <div className="expense-cost">${cost}</div>
        </div>
        <div>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
