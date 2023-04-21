import React from 'react';

const ExpenseTotal = ({ expenses }) => {
  const total = expenses.reduce((total, expense) => {
    return (total += expense.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
     
