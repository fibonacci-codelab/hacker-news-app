import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ left, title, right }) {
  return (
    <header
      className="flex h-11 standalone:h-22 items-center border-x border-b dark:border-hacker-dark-less
    sticky top-0 md:static bg-white/95 dark:bg-hacker-dark-normal text-gray-600 dark:text-hacker-light z-20"
    >
      <Link to={left.to} className="h-full flex items-center text-hacker-orange px-3 hover:bg-[#f6f6ef] dark:hover:bg-hacker-dark-less">
        {left.content}
      </Link>
      <div className="flex-1 text-sm text-center mx-14 truncate">{title}</div>
      <div className="h-full w-11">
        {right && (
          <div
            className="h-full flex justify-center items-center px-3 text-hacker-orange hover:bg-[#f6f6ef] hover:cursor-pointer dark:hover:bg-hacker-dark-less"
            onClick={right.handleClick}
          >
            {right.content}
          </div>
        )}
      </div>
    </header>
  )
}
