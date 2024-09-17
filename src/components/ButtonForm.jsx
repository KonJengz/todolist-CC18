export default function ButtonForm({ hdClick, textBtn }) {
  return (
    <button
      onClick={hdClick}
      className="bg-[#29292F] mt-[4rem] rounded-xl w-full py-2 text-white"
    >
      {textBtn}
    </button>
  );
}
