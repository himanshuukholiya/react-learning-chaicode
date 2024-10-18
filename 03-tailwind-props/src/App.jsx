import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-900 p-5 rounded-lg '>Tailwind Test</h1>
      <Card username = "himanshuukholiya" buttonValue = "View Profile -&gt;" />
      <Card username = "himanshu" buttonValue = "Visit -&gt;" />
      <Card username = "kholiya" />
    </>
  )
}

export default App
