import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isValidate, setIsValidate] = useState({
    email: false,
    pass: false,
  });

  const handleLoginClick = () => {
    // toast.error("Please enter all fields");
    setIsSubmitted(true);
    if (isValidate.email && isValidate.pass) {
      console.log("login successfully");
    }
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const handleUserInputChange = (type, val) => {
    if (!type === "email" || !type === "pass") return;
    if (isSubmitted) setIsSubmitted(false);

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmail = emailRegex.test(val);

      setEmail(val);
      setIsValidate({ ...isValidate, email: isEmail });
    } else {
      const isPass = val.length >= 6;

      setPass(val);
      setIsValidate({ ...isValidate, pass: isPass });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="w-4/5 h-4/5 flex items-center justify-center">
        <div className="w-2/4 min-h-2/4 h-full flex justify-center items-center bg-gray-500 rounded-tl-2xl">
          <div className="w-4/5 h-4/5 flex flex-col items-start justify-around">
            <div className="text-4xl font-semibold w-full flex justify-center items-center">Sign In</div>
            <div className="w-full">
              <div className="w-full flex flex-col pb-10">
                <label className="uppercase text-black text-xm font-semibold pb-3" htmlFor="mail">
                  Email
                </label>
                <input placeholder="Enter email address" id="mail" value={email} onChange={(e) => handleUserInputChange("email", e.target.value)} type="text" className="rounded-3xl h-12 pl-4 outline-none bg-gray-200" />
              </div>
              <div>
                <div className="w-full flex flex-col">
                  <label className="uppercase text-black text-xm font-semibold pb-3" htmlFor="password">
                    Password
                  </label>
                  <input placeholder="Enter password" id="password" value={pass} onChange={(e) => handleUserInputChange("pass", e.target.value)} type="password" className="rounded-3xl h-12 pl-4 outline-none bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="h-2 flex items-center justify-center">{isSubmitted && (!isValidate.email || !isValidate.pass) && <div className="flex justify-center items-center text-red-700">Please enter all field</div>}</div>
            <button onClick={handleLoginClick} className="w-full bg-gray-800 py-3 rounded-3xl text-white text-lg hover:bg-gray-900 transition-all duration-300 ease-in-out">
              Sign In
            </button>
          </div>
        </div>
        <div className="w-2/4 h-full flex items-center justify-center bg-gray-800 rounded-br-2xl">
          <div className="h-full flex flex-col justify-center items-center gap-5">
            <div className="text-white font-bold text-4xl">Welcome to Login</div>
            <p className="text-white font-medium text-base">Don't have an account?</p>
            <button className="text-white font-medium text-base border-2 py-2 px-4 rounded-3xl cursor-pointer hover:scale-105" onClick={navigateToSignUp}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
