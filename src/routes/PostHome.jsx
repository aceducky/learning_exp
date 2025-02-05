import usePostsStore from "../stores/post_store";

function PostHome() {
  const posts = usePostsStore((state) => state.posts);
  return (
    <>
      {posts.length === 0
        ? "No posts found"
        : posts.map((post) => (
            <div key={post.id} className="border p-3">
              <h2>
                {post.id}.{post.title.toUpperCase()}
              </h2>
              <p>post.body</p>
            </div>
          ))}
    </>
  );
}

export default PostHome;
