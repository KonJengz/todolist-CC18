import { useState } from "react";
import HeadText from "../components/HeadText";
import InputForm from "../components/InputForm";
import ButtonForm from "../components/ButtonForm";
import validateData from "../validate/validate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const initialInput = {
    email: "",
    password: "",
  };

  const initialInputError = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const hdChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdClickForm = async (e) => {
    try {
      e.preventDefault();

      const isError = validateData.login(input);
      console.log("first", isError);

      if (Object.keys(isError).length !== 0) {
        return setInputError(isError);
      }

      // await Login(input)

      toast.success("login success");
      //   navigate("/todo");
    } catch (error) {
      console.log(error);
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
        />

        <ButtonForm textBtn="LOGIN" />
      </form>
    </div>
  );
}
