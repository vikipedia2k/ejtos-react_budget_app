import React from 'react';

const Budget = ({ budget, handleBudgetChange }) => {
  return (
    <div className="budget">
      <label htmlFor="budget">Budget:</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          type="number"
          className="form-control"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          min={0}
          max={20000}
        />
      </div>
    </div>
  );
};

export default Budget;
