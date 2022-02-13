import React from 'react'
export default function More({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="block hover:bg-[#f6f6ef] text-center text-sm text-blue-500 
      py-5 hover:cursor-pointer dark:hover:bg-hacker-dark-less"
    >
      More...
    </div>
  )
}
