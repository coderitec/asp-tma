"use client"
import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
    const [open, setOpen] = useState(false)
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [date,setDate] = useState('')
    const [addTask, setAddTask] = useState([])

    return (
    <div>
        <SidebarContext.Provider value={{open, setOpen,title,setTitle, desc,setDesc,date,setDate, addTask, setAddTask}}>
            {children}
        </SidebarContext.Provider>
    </div>
  )
}

export {SidebarProvider, SidebarContext}