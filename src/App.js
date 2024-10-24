import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";
import SignUp from "./Pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
