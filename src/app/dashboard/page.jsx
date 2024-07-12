"use client"
import React, { useContext } from 'react'
import { SidebarContext } from '../providers'
import styles from './dash.module.css'
import TaskItem from './TaskItem'
import TaskManager from './APITask'


export default function Dashboard() {
  const {tasks} = useContext(SidebarContext)

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>due date</th>
          <th>task title</th>
          <th>task description</th>
          <th>task status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length == 0 ? 
        <tr>
          <td colSpan={4}>create a task, task field is empty</td>
        </tr>

        :
        (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} />
            // <TaskManager key={task.id}/>
          ))
        )}
      </tbody>
      
    </table>
  )
}
