// src/features/tasks/TaskList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import TaskItem from './TaskItem';
import { addTask } from './tasksSlice';

const TaskList: React.FC = () => {
  const showCompleted = useSelector(
    (state: RootState) => state.filters.showCompleted
  );
  const tasks = useSelector((state: RootState) =>
    showCompleted ? state.tasks.tasks : state.tasks.tasks.filter(task => !task.completed)
  );

  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      dispatch(addTask(newTaskText));
      setNewTaskText(''); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
