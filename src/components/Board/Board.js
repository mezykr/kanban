import React from 'react';
import PropTypes from 'prop-types';

import Stage from '../Stage/Stage';
import './Board.css';

const Board = ({ stages, tasks, selectedTask, setSelectedTask }) => (
  <section className="board">
    <h1 className="board__header">Kanban board</h1>
    <div className="board__content">
      {stages.map((name, index) => {
        const stageTasks = tasks.filter(t => t.stage === index);

        return <Stage
          key={index}
          name={name}
          tasks={stageTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          stageId={index} />;
      })}
    </div>
  </section>
);

export default Board;

Board.propTypes = {
  stages: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.object,
};
