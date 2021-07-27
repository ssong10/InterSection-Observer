import React, { useRef,useEffect, HTMLAttributes } from 'react';

interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  loading : boolean,
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const FetchMore:React.FC<CommentProps> = ({ loading, setPage }) => {
  const target = useRef<HTMLDivElement>(null);
  const nextPage = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      setPage((page) => page + 1);
    }
  });

  useEffect(() => {
    const node = target.current
    if (node) {
      nextPage.observe(node);
      return () => {
        nextPage.unobserve(node);
      };
    }
  }, []);
  return (
    <div
      ref={target}
      className={loading ? "loading" : ""}
    >...</div>
  )
}
export default FetchMore;
