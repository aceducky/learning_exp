import Card from "../components/Card";
import usePostsStore from "../stores/post_store";

function PostHome() {
  const posts = usePostsStore((state) => state.posts);
  return (
    <>
      {posts.length === 0 ? (
        "No posts found"
      ) : (
        <div className="grid grid-cols-2 m-2 gap-1">
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
