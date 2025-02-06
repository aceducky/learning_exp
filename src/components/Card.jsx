/* eslint-disable react/prop-types */
function Card({ id, title, body }) {
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
        onClick={() => {
          console.log("Hello");
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default Card;
