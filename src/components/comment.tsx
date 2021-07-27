import React, { HTMLAttributes } from 'react';

interface IComment {
  postId : number,
  id : number,
  name : string,
  email : string,
  body : string,
}

interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  comment: IComment
}
const Comment:React.FC<CommentProps> = ({ comment }) => (
  <div className="card">
    <div>
      <span>
        Comment Id :
        {comment.id}
      </span>
    </div>
    <div>
      <span>{comment.email}</span>
    </div>
    <div>
      <p>comment</p>
      {comment.body}
    </div>
  </div>
);
export default Comment;
