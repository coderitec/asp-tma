"use client"
import React, { useContext } from 'react';
import { SidebarContext } from '../providers';
import TaskStatusUpdater from './TaskStatusUpdater';

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(SidebarContext);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  const handleStatusChange = (newStatus) => {
   
    updateTaskStatus(task.id, newStatus);
  };

  return (
    <tr key={task.id}>
      <td>{new Date(task.dueDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <TaskStatusUpdater task={task} onStatusChange={handleStatusChange} />
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
