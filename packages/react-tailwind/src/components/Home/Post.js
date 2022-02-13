import React from 'react'
import { Link } from 'react-router-dom'
import { OcticonComment } from '../../tools'

export default function Post({ post, index }) {
  const { id, url, title, domain, points, user, time_ago, comments_count } = post

  return (
    <div className="relative hover:cursor-pointer">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 pr-10 py-2 h-full hover:bg-[#f6f6ef] dark:hover:bg-hacker-dark-less group"
      >
        {index !== undefined && <div className="w-8 text-right text-sm shrink-0 text-[#666d74] font-light">{index + 1}</div>}
        <div className="ml-2 flex-grow-1">
          <div className="text-sm hover:cursor-pointer">{title}</div>
          <div className="text-[#003d80] hover:cursor-pointer text-sm group-hover:text-[#003d80] group-hover:underline">{domain}</div>
          <div className="text-gray-500 text-sm">{`${points} points by ${user} ${time_ago} · ${comments_count} comments`}</div>
        </div>
      </a>
      <Link
        to={`item/${id}`}
        state={{ post }}
        className="z-10 h-full absolute flex pt-3 justify-center top-0 right-0 text-hacker-orange w-10 hover:bg-[#f6f6ef] dark:hover:bg-hacker-dark-less"
      >
        <OcticonComment />
      </Link>
    </div>
  )
}
