import React, { useEffect, useState
 } from 'react';
import { getComments } from '../utils/api';
import Comment from './comment';
import FetchMore from './fetchMore'

/*
 * Please modify this component to complete assignment.
 * You can modify all the files in that package if you need.
 */

interface IComment {
  postId : number,
  id : number,
  name : string,
  email : string,
  body : string,
}

const InfiniteScrollList:React.FC = () => {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    showMore();
  }, [page]);

  const showMore = async () => {
    setLoading(true)
    const data = await getComments(page);
    console.log(data);
    setComments((prev) => [...prev, ...data]);
    setLoading(false);
  };

  return (
    <>
      <div className="commentList">
        {comments.map((comment) => 
          <Comment key={comment.id} comment={comment} />
        )}
      </div>
      <FetchMore loading={page !== 1 && loading} setPage={setPage} />
    </>
  );
};

export default InfiniteScrollList;
