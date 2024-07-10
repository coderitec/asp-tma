import React from 'react'
import styles from './get.module.css'

export default function GetStarted() {
  return (
    <div className={styles.form}>
      <form>
        <fieldset>
        <legend>create a new task</legend>
        <ul>
          <li>
            <input type="text" name="title" id="title" placeholder='task title' defaultValue={''} required/>
          </li>
          <li>
            <input type="text" name="desc" id="desc" placeholder='task description' defaultValue={''} required/>
          </li>
          <li>
            <input type="date" name="date" id="date" required />
          </li>
          <li>
            <button className='uppercase'>create a task</button>
          </li>
        </ul>
        </fieldset>
      </form>
    </div>
  )
}
