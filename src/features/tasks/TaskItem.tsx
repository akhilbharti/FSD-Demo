// src/features/tasks/TaskItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Task, toggleTaskCompletion, deleteTask } from './tasksSlice';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTaskCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleTaskCompletion}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleDeleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
