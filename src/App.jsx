import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './components/Chat/Chat'
import Blogs from './components/blogs/Blogs' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Blogs/>
  )
}

export default App
