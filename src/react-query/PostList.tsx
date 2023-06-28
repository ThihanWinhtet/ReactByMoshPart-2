import { useState } from "react";
import useData from "./hooks/useData";

const PostList = () => {
  
  const [userId, setUserId] = useState<number>();
  
  const { data: posts, error, isLoading } = useData(userId);

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error.name}</p>;

  return (
    <>
      <select
        className="form-control mb-4"
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        <option value=""></option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
