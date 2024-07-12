"use client"
import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')
    const [tasks, setTasks] = useState([])

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
      };

    return (
        <SidebarContext.Provider value={{ open, setOpen, title, setTitle, desc, setDesc, date, setDate, tasks, setTasks,deleteTask }}>
            {children}
        </SidebarContext.Provider>
    )
}

export { SidebarProvider, SidebarContext }
