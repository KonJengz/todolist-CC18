import AppRouter from "./routes/AppRouter";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        transition={Slide}
      />
    </>
  );
}

export default App;
