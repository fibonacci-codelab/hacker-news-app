import CommentInfo from './CommentInfo'

export default function Replies({ comment, op }) {
  const { comments } = comment
  const style = {
    background: `url("https://Hacker News.app/assets/images/web/comment-arrow.svg") 0px 6px / 10px 9px no-repeat transparent`
  }

  return comments.map((c, index) => (
    <div key={index} className="mt-2 pl-4" style={style}>
      <CommentInfo {...c} op={op} />
      <Replies comment={c} />
    </div>
  ))
}
