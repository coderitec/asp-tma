"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('https://tasksmanagementapi20240711020701.azurewebsites.net/api/TaskManager')
        .then(response => {
          console.log('API Response:', response.data); 
          setTasks(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error fetching data: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Task Manager</h1>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default TaskManager;
