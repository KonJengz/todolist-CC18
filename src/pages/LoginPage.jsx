import { useState } from "react";
import HeadText from "../components/HeadText";
import InputForm from "../components/InputForm";
import ButtonForm from "../components/ButtonForm";
import validateData from "../validate/validate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import userStore from "../stores/user-store";

export default function LoginPage() {
  const initialInput = {
    email: "",
    password: "",
  };

  const initialInputError = {
    email: "",
    password: "",
  };

  const { login, authUser } = userStore();

  console.log("authUser", authUser);

  const navigate = useNavigate();

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const [errorAxios, setErrorAxios] = useState("");

  const hdChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
    setErrorAxios("");
  };

  const hdClickForm = async (e) => {
    try {
      e.preventDefault();

      const isError = validateData.login(input);
      console.log("first", isError);

      if (Object.keys(isError).length !== 0) {
        return setInputError(isError);
      }

      await login(input);

      toast.success("login success");
      setInput(initialInput);
      navigate("/todo");
    } catch (error) {
      console.log(error);
      setErrorAxios(error.response.data);
    }
  };

  console.log("input", input);

  return (
    <div className="border border-sky-800 p-12 rounded-2xl space-y-6">
      <HeadText text="Welcome" />

      <form onSubmit={hdClickForm} className="flex flex-col gap-4">
        <InputForm
          headInput="emailOrMobile"
          valueInput={input.email}
          hdChange={hdChange}
          errorInput={inputError.email}
          nameInput="email"
        />

        <InputForm
          headInput="password"
          valueInput={input.password}
          hdChange={hdChange}
          errorInput={inputError.password}
          nameInput="password"
          typeInput="password"
        />

        {errorAxios && (
          <small className="text-red-400 text-xs">{errorAxios}</small>
        )}

        <ButtonForm textBtn="LOGIN" />
      </form>
    </div>
  );
}
