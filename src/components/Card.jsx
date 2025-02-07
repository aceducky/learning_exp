/* eslint-disable react/prop-types */
import usePostsStore from "../stores/post_store";
import { deletePostWithId } from "../api/post_api";

function Card({ id, title, body }) {
  const deletePostStore = usePostsStore((state) => state.deletePostWithId);
  async function onClickDelete(id) {
    try {
      const res = await deletePostWithId(id);
      if (res.status === 200) {
        deletePostStore(id);
      } else {
        console.log("Failed");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      key={id}
      className="rounded-xl shadow-sm bg-gradient-to-r from-amber-200 to-yellow-400 p-6"
    >
      <h2>
        {id}. {title.toUpperCase()}
      </h2>
      <p>{body}</p>
      <button
        className="p-2 rounded-sm bg-red-400 hover:bg-red-500 hover:scale-105"
        onClick={() => onClickDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
