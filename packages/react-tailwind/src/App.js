import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Item from './components/Item'

export default function App() {
  return (
    <div className="flex justify-center bg-zinc-50 min-h-screen dark:bg-hacker-dark-more dark:text-hacker-light">
      <div className="flex flex-col bg-white dark:bg-hacker-dark-more w-[700px] shadow-sm ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}
