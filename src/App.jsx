import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContactList from './components/container/ContactList'
import Clock from './components/container/Clock'
function App() {

  return (
    <div className="App">
      <Clock />
      <ContactList />
    </div>
  )
}

export default App
