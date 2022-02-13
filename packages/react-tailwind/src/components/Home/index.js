import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Container from './Container'
import { IonRefreshOutline, apiRootUrl } from '../../tools'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isMoreClicked, setIsMoreClicked] = useState(false)

  const props = {
    left: { content: 'About', to: '/about' },
    title: 'Hacker News',
    right: {
      content: <IonRefreshOutline />,
      handleClick() {
        setPosts([])
        setIsMoreClicked(false)
        handleRefresh()
      }
    }
  }

  const handleMoreClicked = () => {
    setIsMoreClicked(true)
    setIsLoading(true)
    fetch(`${apiRootUrl}/news2`)
      .then(res => res.json())
      .then(data => {
        setPosts([...posts, ...data])
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleRefresh = () => {
    setIsLoading(true)
    fetch(`${apiRootUrl}/news`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(handleRefresh, [setIsLoading, setPosts])

  useEffect(() => {
    document.title = 'Hacker News'
  }, [])

  return (
    <div className="dark:bg-hacker-dark-more">
      <Header {...props} handleRefresh={handleRefresh} />
      <Container posts={posts} isLoading={isLoading} isMoreClicked={isMoreClicked} handleMoreClicked={handleMoreClicked} />
    </div>
  )
}
