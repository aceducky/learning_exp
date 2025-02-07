/* eslint-disable react/prop-types */
import { useFetcher } from "react-router";

function Card({ id, title, body }) {
  const fetcher = useFetcher();

  return (
    <div
      key={id}
      className="rounded-xl shadow-sm bg-gradient-to-r from-amber-200 to-yellow-400 p-6"
    >
      <h2>
        {id}. {title.toUpperCase()}
      </h2>
      <p>{body}</p>
      <fetcher.Form method="DELETE">
        <button
          className="p-2 rounded-sm bg-red-400 hover:bg-red-500 hover:scale-105"
          name="id"
          value={id}
        >
          Delete
        </button>
      </fetcher.Form>
    </div>
  );
}

export default Card;
