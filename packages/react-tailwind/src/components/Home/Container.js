import React from 'react'
import Posts from './Posts'
import More from './More'
import Loading from '../Loading'

export default function Container({ posts, isLoading, isMoreClicked, handleMoreClicked }) {
  return (
    <div className="border-x dark:border-hacker-dark-less">
      {posts.length > 0 && <Posts posts={posts} />}
      {!isMoreClicked && !isLoading && <More onClick={handleMoreClicked} />}
      {isLoading && <Loading />}
    </div>
  )
}
