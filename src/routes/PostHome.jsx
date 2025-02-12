import { useEffect } from "react";
import Card from "../components/Card";
import usePostsStore from "../stores/post_store";

function PostHome() {
  const posts = usePostsStore((state) => state.posts);
  useEffect(() => {
    console.log(posts.filter(p=>p.id ===1));
  }, [posts]);
  return (
    <>
      {posts.length === 0 ? (
        "No posts found"
      ) : (
        <div className="grid grid-cols-2 m-2 gap-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default PostHome;
