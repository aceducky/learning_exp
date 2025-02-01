import { useLoaderData } from "react-router";

function PostHome() {
  const posts = useLoaderData();//Have written useLoaderData for now, check routes.jsx
  return (
    <div>
      <div>PostHome</div>
      <div>
        
      </div>
    </div>
  );
}

export default PostHome;
