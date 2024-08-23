import React from 'react'
import Sidebar from './sidebar/Sidebar'
import ThemeToggler from '../theme/ThemeToggler'

export default function Chat() {
  return (
    <div>
        <ThemeToggler/>
        <Sidebar/>
    </div>
  )
}
