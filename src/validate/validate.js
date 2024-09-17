const validateData = {};

validateData.login = (input) => {
  const errorInput = {};

  if (!input.email.trim()) {
    errorInput.email = "email is required";
  }

  if (!input.email.includes("@") && input.email.trim() !== "") {
    errorInput.email = "คุณไม่ได้ใส่ @";
  }

  if (!input.password.trim()) {
    errorInput.password = "password is required";
  }

  return errorInput;
};

export default validateData;
