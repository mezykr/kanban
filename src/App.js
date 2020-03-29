import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Controls from './components/Controls/Controls';
import Board from './components/Board/Board';

const stages = ['Backlog', 'To Do', 'Ongoing', 'Done'];

const App = ({ predefinedTasks = [] }) => {
  const [tasks, setTasks] = useState(predefinedTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const sharedProps = { stages, tasks, setTasks, selectedTask, setSelectedTask };

  return (
    <article className="app">
      <Controls { ...sharedProps } />
      <Board { ...sharedProps } />
    </article>
  );
}

export default App;

App.propTypes = {
  predefinedTasks: PropTypes.array,
};
