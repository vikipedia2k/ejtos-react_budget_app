import React from "react";
import PropTypes from "prop-types";

const Remaining = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};

Remaining.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.array.isRequired,
};

export default Remaining;
