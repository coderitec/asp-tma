"use client"
import React, { useContext } from 'react'
import styles from './get.module.css'
import { SidebarContext } from '../providers'

export default function GetStarted() {
  const {title, setTitle} = useContext(SidebarContext)
  const {desc, setDesc} = useContext(SidebarContext)
  const {date, setDate} = useContext(SidebarContext)
  const {addTask, setAddTask} = useContext(SidebarContext)

  function handleTitleChange(e){
    setTitle(e.target.value)
  }

  function handleDescChange(e){
    setDesc(e.target.value)
  }

  function handleDateChange(e){
    setDate(e.target.value)
  }

function handleFormSubmit(e){
  e.preventDefault()
  setAddTask([...addTask, {name:title,description:desc,time:date}])
}

  return (
    <div className={styles.form}>
      <form onSubmit={(e)=>handleFormSubmit(e)}>
        <fieldset>
        <legend>create a new task</legend>
        <ul>
          <li>
            <input type="text" name="title" id="title" placeholder='task title' defaultValue={title} required onChange={(e) => handleTitleChange(e)}/>
          </li>
          <p>{title}</p>
          <li>
            <input type="text" name="desc" id="desc" placeholder='task description' defaultValue={desc} required onChange={(e) => handleDescChange(e)}/>
          </li>
          <p>{desc}</p>
          <li>
            <input type="date" name="date" id="date" defaultValue={date} onChange={(e) => handleDateChange(e)} required />
          </li>
          <p>{date}</p>
          <li>
            <button className='uppercase'>create a task</button>
          </li>
        </ul>
        </fieldset>
      </form>
    </div>
  )
}
