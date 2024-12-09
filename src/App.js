import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";
import SignUp from "./Pages/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer theme="dark" position="bottom-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
