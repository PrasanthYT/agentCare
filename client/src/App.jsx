import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}
