import ButtonTodo from "./ButtonTodo";

export default function TodoListItem({ item }) {
  return (
    <div>
      <input type="checkbox" />
      <p className="text-white">{item.title}</p>
      <ButtonTodo textBtn="edit" />
      <ButtonTodo textBtn="save" />

      <ButtonTodo textBtn="delete" />
      <ButtonTodo textBtn="cancel" />
    </div>
  );
}
