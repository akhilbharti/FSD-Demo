// src/features/filters/FilterBar.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { toggleShowCompleted } from './filterSlice';

const FilterBar: React.FC = () => {
  const showCompleted = useSelector(
    (state: RootState) => state.filters.showCompleted
  );
  const dispatch = useDispatch();

  const handleToggleShowCompleted = () => {
    dispatch(toggleShowCompleted());
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={handleToggleShowCompleted}
        />
        Show Completed Tasks
      </label>
    </div>
  );
};

export default FilterBar;
