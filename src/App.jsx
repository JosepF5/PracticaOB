import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskList from './components/container/TaskList'
import ContactList from './components/container/ContactList'
import Clock from './components/container/Clock'
function App() {

  return (
    <div className="App">
      <TaskList />Clock
      <ContactList />
      <Clock />
    </div>
  )
}

export default App
