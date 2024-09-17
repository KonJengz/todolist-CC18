import { useEffect, useState } from "react";
import HeadText from "../components/HeadText";
import InputForm from "../components/InputForm";
import axios from "axios";
import userStore from "../stores/user-store";
import { useNavigate } from "react-router-dom";
import ButtonForm from "../components/ButtonForm";
import ButtonTodo from "../components/ButtonTodo";
import TodoListItem from "../components/TodoListItem";

export default function TodoListPage() {
  const API_ALLTODO = `http://139.5.146.186/api/v1/todo?userId=`;
  const initalInput = { title: "" };

  const { authUser, logout } = userStore();
  const navigate = useNavigate();

  const [input, setInput] = useState(initalInput);
  const [todoList, setTodoList] = useState([]);

  const fetchAllTodo = async (userId) => {
    try {
      const res = await axios.get(API_ALLTODO + `${userId}`);
      console.log("res.data=====", res.data);
      setTodoList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("/");
    } else {
      fetchAllTodo(authUser?.user.userId || localStorage.getItem("userId"));
    }
  }, []);

  const hdChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdClickLogout = () => {
    logout();
    navigate("/");
  };

  console.log("todoList", todoList);
  console.log("authUser", authUser);

  return (
    <div className="w-[30rem]">
      <HeadText text="MY TODO" />
      <div>
        <div className="flex items-center">
          <InputForm
            valueInput={input.title}
            nameInput="title"
            hdChange={hdChange}
            headInput="new task"
          />

          <ButtonTodo textBtn="Add Todo" />
        </div>

        <div>
          {todoList.map((item) => (
            <TodoListItem key={item.id} item={item} />
          ))}
        </div>

        <ButtonForm hdClick={hdClickLogout} textBtn="LOGOUT" />
      </div>
    </div>
  );
}
