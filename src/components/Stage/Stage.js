import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';
import './Stage.css';

const Stage = ({ name, stageId, tasks, selectedTask, setSelectedTask }) => (
  <section className="stage" data-testid={`stage-${stageId}`}>
    <h1>{name}</h1>
    {tasks
      .map((task, index) =>
        <Task
          key={index}
          task={task}
          isSelected={task === selectedTask}
          setSelectedTask={setSelectedTask} />)}
  </section>
);

export default Stage;

Stage.propTypes = {
  name: PropTypes.string.isRequired,
  stageId: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.object,
};
