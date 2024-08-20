import { useState } from 'react';
import './App.css';
import Sidebar from './components/chat/sidebar/Sidebar';
import ThemeToggler from './components/theme/ThemeToggler';

function App() {
  return (
    <>
      <ThemeToggler />
      <Sidebar />
    </>
  );
}

export default App;
