export default function ButtonTodo({ textBtn, hdClick }) {
  return (
    <button
      onClick={hdClick}
      className="py-1 px-2 bg-sky-800 rounded-xl text-white hover:underline"
    >
      {textBtn}
    </button>
  );
}
