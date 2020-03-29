import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Controls.css';

const Controls = (props) => {
  const { stages, tasks, setTasks, selectedTask, setSelectedTask } = props;
  const [newTaskName, setNewTaskName] = useState('');
  const [selectedTaskName, setSelectedTaskName] = useState('');

  const onNewTaskNameChange = ev => setNewTaskName(ev.target.value);
  const onSelectedTaskNameChange = ev => setSelectedTaskName(ev.target.value);

  const createTask = () => setTasks([...tasks, {
    name: newTaskName,
    stage: 0,
  }]);

  const deleteTask = () => {
    const updatedTasks = tasks.filter(t => t !== selectedTask);

    setSelectedTaskName('');
    setSelectedTask(null);
    setTasks(updatedTasks);
  };

  const moveTask = (direction) => {  
    const stage = selectedTask.stage + direction;

    if (stage < 0 || stage > stages.length -1) {
      return;
    }

    setTasks([
      ...tasks.filter(t => t !== selectedTask),
      { ...selectedTask, stage },
    ]);
  }

  useEffect(() => {
    if (selectedTask  && selectedTask.name !== selectedTaskName) {
      setSelectedTaskName(selectedTask.name);
    }
  }, [selectedTask]);

  useEffect(() => {
    const newSelectedTask = tasks.find(t => t.name === selectedTaskName);

    if (selectedTask !== newSelectedTask) {
      setSelectedTask(newSelectedTask);
    }
  }, [selectedTaskName, tasks]);

  const disableCreateButton = !newTaskName || !!tasks.find(t => t.name === newTaskName);
  const disableBackButton = !selectedTask || selectedTask.stage === 0;
  const disableForwardButton = !selectedTask || selectedTask.stage === stages.length - 1;
  const disableDeleteButton = !selectedTask;

  return (
    <section className="controls">
      <h1 className="controls__header">Controls</h1>

      <div className="controls__row">
        <input
          data-testid="new-task-name-input"
          placeholder="New task name"
          className="controls__input"
          value={newTaskName}
          onChange={onNewTaskNameChange} />

        <button
          data-testid="create-task-btn"
          disabled={disableCreateButton}
          className="controls__button"
          onClick={createTask}>Create</button>
      </div>

      <div className="controls__row">
        <input
          data-testid="selected-task-field"
          placeholder="Selected task name"
          className="controls__input"
          value={selectedTaskName}
          onChange={onSelectedTaskNameChange} />

        <button
          data-testid="move-back-btn"
          disabled={disableBackButton}
          className="controls__button"
          onClick={() => moveTask(-1)}>Move back</button>
        <button
          data-testid="move-forward-btn"
          disabled={disableForwardButton}
          className="controls__button"
          onClick={() => moveTask(1)}>Move forward</button>
        <button
          data-testid="delete-btn"
          disabled={disableDeleteButton}
          className="controls__button"
          onClick={deleteTask}>Delete</button>
      </div>
    </section>
  );
}

export default Controls;

Controls.propTypes = {
  stages: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.object,
};
