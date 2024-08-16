import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './components/chat/Chat1'
import Blogs from './components/blogs/Blogs' 
import Sidebar from './components/chat/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Sidebar/>
  )
}

export default App
