import { useState } from 'react'
import CommentInfo from './CommentInfo'
import Replies from './Replies'

export default function Comment({ comment, op }) {
  const [showReplies, setShowReplies] = useState(false)
  const repliesCount = $tools.getCountOfReplies(comment) - 1

  return (
    <div className="p-4 text-sm">
      <CommentInfo {...comment} op={op} />
      {comment.comments.length > 0 && (
        <>
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="text-gray-500 dark:text-hacker-light bg-gray-200/50 dark:bg-[#333] 
            dark:hover:bg-[#444] hover:bg-gray-200 py-1 px-3 rounded"
          >{`${repliesCount} ${repliesCount === 1 ? 'reply' : 'replies'}`}</button>
          {showReplies && <Replies comment={comment} op={op} />}
        </>
      )}
    </div>
  )
}
