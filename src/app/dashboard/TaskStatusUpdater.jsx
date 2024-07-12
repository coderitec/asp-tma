"use client"
import React, { useState } from 'react'

export default function TaskStatusUpdater({ task, onStatusChange }) {
  const [status, setStatus] = useState(task.status || '');

  async function handleStatusChange(e) {
    const newStatus = e.target.value;
    setStatus(newStatus);

    const apiUrl = `https://tasksmanagementapi20240711020701.azurewebsites.net/api/TaskManager/${task.id}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...task, status: newStatus }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Task status updated successfully:', data);
        if (onStatusChange) {
          onStatusChange(task.id, newStatus);
        }
      } else {
        console.error('Failed to update task status:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <select value={status} onChange={handleStatusChange} className='text-slate-950'>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  )
}
