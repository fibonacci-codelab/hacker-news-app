import './CommentInfo.css'
import { hwUserUrl, hwItemUrl } from '../../tools'

export default function CommentInfo({ user, content, time_ago, id, op }) {
  return (
    <>
      <div className="flex justify-between">
        <a className="text-rose-800" href={`${hwUserUrl}${user}`} target="_blank" rel="noreferrer">
          {user}
          {op === user && <span className="text-white px-1 py-0.5 text-xs rounded-sm bg-rose-700 ml-1">OP</span>}
        </a>
        <a className="text-gray-500 hover:underline" href={`${hwItemUrl}${id}`} target="_blank" rel="noreferrer">
          {time_ago}
        </a>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="my-2 text-[13px] text-gray-900 dark:text-hacker-light leading-6 whitespace-pre-wrap"
      />
    </>
  )
}
