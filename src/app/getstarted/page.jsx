"use client"
import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react'
import styles from './get.module.css'
import { SidebarContext } from '../providers'

export default function GetStarted() {
  const { title, setTitle, desc, setDesc, date, setDate, tasks, setTasks } = useContext(SidebarContext);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  async function handleTaskSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: title,
      description: desc,
      dueDate: date,
      status:'Select Status'
    };

    setTasks([...tasks, newTask]);

    const apiUrl = 'https://tasksmanagementapi20240711020701.azurewebsites.net/api/TaskManager';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Task created successfully:', data);
        
        // Update local state with the new task returned by the API
        setTasks([...tasks, newTask]);
      } else {
        console.error('Failed to create task:', response.statusText);
        const errorData = await response.json();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleTaskSubmit}>
        <fieldset>
          <legend>create a new task</legend>
          <ul>
            <li>
              <input type="text" name="title" id="title" placeholder='task title' value={title} required onChange={handleTitleChange} />
            </li>
            <li>
              <input type="text" name="desc" id="desc" placeholder='task description' value={desc} required onChange={handleDescChange} />
            </li>
            <li>
              <input type="date" name="date" id="date" value={date} required onChange={handleDateChange} />
            </li>
            <li>
              <button className='uppercase' type="submit">create a task</button>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  )
}
