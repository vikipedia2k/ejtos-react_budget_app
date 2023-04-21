import React from 'react';

const AllocationForm = ({ department, budget, remainingBudget, handleAllocationChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={department}>{department}</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          type="number"
          className="form-control"
          id={department}
          value={budget}
          onChange={(e) => handleAllocationChange(e, department)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => handleAllocationChange({ target: { value: budget - 10 } }, department)}
            disabled={budget <= remainingBudget}
          >
            <img src="minus.png" alt="minus" className="icon" />
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => handleAllocationChange({ target: { value: budget + 10 } }, department)}
          >
            <img src="plus.png" alt="plus" className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
