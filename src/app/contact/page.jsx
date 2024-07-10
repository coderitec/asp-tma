"use client"
import React, { useContext } from 'react'
import { SidebarContext } from '../providers'

export default function Contact() {
  const {addTask} = useContext(SidebarContext)
  return (
    <div>Contact Page: {new Date(`${addTask[0].time}`).toLocaleDateString()}</div>
  )
}
