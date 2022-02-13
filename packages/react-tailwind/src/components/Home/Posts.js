import React from 'react'
import Post from './Post'

export default function Posts({ posts }) {
  return (
    <div
      className="divide-y dark:divide-hacker-dark-less border-b 
    dark:bg-hacker-dark-more dark:border-hacker-dark-less"
    >
      {posts.map((post, index) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </div>
  )
}
