import React from "react";
import useData from "./hooks/useData";

const PostList = () => {
  const pageSize = 10;

  const { data: posts, error, isLoading, fetchNextPage, isFetchingNextPage} = useData({ pageSize });

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error.name}</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((page, index)=>
          <React.Fragment key={index}>
            {page.map(post => 
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>)}
          </React.Fragment>
        )}
      </ul>
      <button
        onClick={() => {fetchNextPage()}}
        disabled = {isFetchingNextPage}
        className="btn btn-primary my-3 ms-2"
      > { isFetchingNextPage ? 'Loading...' : 'Load More'} </button>
    </>
  );
};

export default PostList;
