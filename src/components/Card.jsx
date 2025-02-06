/* eslint-disable react/prop-types */
function Card({ id, title, body }) {
  return (
    <div key={id} className="rounded-xl shadow-sm bg-gradient-to-br from-blue-800 via-violet to-white p-3">
      <h2>
        {id}. {title.toUpperCase()}
      </h2>
      <p>{body}</p>
      <button className="p-2 rounded-sm bg-red-400 hover:bg-red-500 hover:scale-105">Delete</button>

    </div>
  );
}
export default Card;
