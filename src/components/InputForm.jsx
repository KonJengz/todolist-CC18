export default function InputForm(props) {
  const { headInput, nameInput, valueInput, hdChange, errorInput } = props;
  return (
    <div className="flex flex-col">
      <label className="text-[#9494B8]">{headInput}</label>
      <input
        name={nameInput}
        value={valueInput}
        onChange={hdChange}
        className="bg-[#1E1F25] text-white border-b border-b-sky-800 outline-none"
        type="text"
      />
      {errorInput && <small className="text-red-400">{errorInput}</small>}
    </div>
  );
}
