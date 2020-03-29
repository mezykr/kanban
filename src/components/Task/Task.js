import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const taskNameToId = name => {
  return `task-${name.split(' ').join('-')}`;
}

const Task = ({ task, isSelected, setSelectedTask }) => {
  const className = ['task', isSelected ? 'task--selected' : ''].join(' ');

  return (
    <div
      data-testid={taskNameToId(task.name)}
      className={className}
      onClick={() => setSelectedTask(task)}>{task.name}</div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.object.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
