import Comment from "./Comment";

export default function Comments({ comments = [], op }) {
  return (
    <div className="divide-y dark:bg-hacker-dark-normal dark:divide-hacker-dark-less">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} op={op} />
      ))}
    </div>
  );
}
