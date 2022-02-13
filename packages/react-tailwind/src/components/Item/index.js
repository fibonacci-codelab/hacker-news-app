import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Header from '../Header'
import Loading from '../Loading'
import Comments from './Comments'
import {apiRootUrl} from '../../tools'

export default function Item() {
  const { itemId } = useParams()
  const location = useLocation()
  const post = location.state?.post
  const [item, setItem] = useState(post || {})
  const { title, domain, points, user, time_ago, comments_count, url } = item
  const [isLoading, setIsLoading] = useState(false)
  const props = {
    left: { content: <$tools.CodiconHome className="text-xl" />, to: '/' },
    title
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`${apiRootUrl}/item/${itemId}`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setItem(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  $tools.useTitle(item.title)

  return (
    <>
      <Header {...props} />
      {title && (
        <div className="p-2 bg-[#f6f6ef] border-x border-b dark:border-hacker-dark-less dark:bg-hacker-dark-more">
          <div className="ml-2 flex-grow-1">
            <a href={url} target="_blank" rel="noreferrer" className="">
              <div className="text-sm hover:cursor-pointer">{title}</div>
              <div className="text-[#003d80] hover:cursor-pointer text-sm group-hover:text-[#003d80] group-hover:underline">{domain}</div>
            </a>
            <div className="text-gray-500 text-sm">{`${points} points by ${user} ${time_ago} · ${comments_count} comments`}</div>
            <a href={`${$tools.hwUrl}${itemId}`} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-[#007aff]">
              <$tools.IonForward className="inline mr-0.5" />
              {`news.ycombinator.com/item?id=${itemId}`}
            </a>
          </div>
        </div>
      )}
      {isLoading ? (
        <div className="dark:bg-hacker-dark-normal">
          <Loading />
        </div>
      ) : (
        <Comments comments={item?.comments} op={user} />
      )}
    </>
  )
}
