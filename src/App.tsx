// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TaskList from './features/tasks/TaskList';
import FilterBar from './features/filters/FilterBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo List App</h1>
        <TaskList />
        <FilterBar />
      </div>
    </Provider>
  );
}

export default App;
