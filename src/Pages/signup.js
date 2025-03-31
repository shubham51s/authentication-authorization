import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const [isValidate, setIsValidate] = useState({
    name: false,
    email: false,
    pass: false,
    confirmPass: false,
  });

  const [isTyping, setIsTyping] = useState({
    name: true,
    email: true,
    pass: true,
    confirmPass: true,
  });

  const handleInputChange = (type, val) => {
    if (!type === "name" || !type === "email" || !type === "pass" || !type === "confirmPass") return;

    if (type === "name") {
      const fullNameRegex = /^[A-Za-z]{2,}(\s[A-Za-z]{2,}){1,2}$/;
      const isName = fullNameRegex.test(val.trim());

      setIsValidate({
        ...isValidate,
        name: isName,
      });

      setUserInfo({
        ...userInfo,
        name: val,
      });

      setIsTyping({
        ...isTyping,
        name: true,
      });
    } else if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmail = emailRegex.test(val);

      setIsValidate({
        ...isValidate,
        email: isEmail,
      });

      setUserInfo({
        ...userInfo,
        email: val,
      });

      setIsTyping({
        ...isTyping,
        email: true,
      });
    } else if (type === "pass") {
      const isPass = val.length >= 6;

      setIsValidate({
        ...isValidate,
        pass: isPass,
      });

      setUserInfo({
        ...userInfo,
        pass: val,
      });

      setIsTyping({
        ...isTyping,
        pass: true,
      });
    } else if (type === "confirmPass") {
      const isPass = val === userInfo.pass;

      setIsValidate({
        ...isValidate,
        confirmPass: isPass,
      });

      setUserInfo({
        ...userInfo,
        confirmPass: val,
      });

      setIsTyping({
        ...isTyping,
        confirmPass: true,
      });
    }
  };

  const handleSignupClick = () => {
    setIsTyping({ ...isTyping, name: false, email: false, pass: false, confirmPass: false });
    if (isValidate.name && isValidate.email && isValidate.pass && isValidate.confirmPass) {
      console.log("successfull login");
    }
    // toast.error("Please enter all fields");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="w-4/5 h-4/5 flex items-center justify-center">
        <div className="w-2/4 min-h-2/4 h-full flex justify-center items-center bg-gray-500 rounded-tl-2xl">
          <div className="w-4/5 h-[90%] flex flex-col items-start justify-between">
            <div className="text-4xl font-semibold w-full flex justify-center items-center">Sign up</div>
            <div className="flex w-full grow flex-col justify-evenly">
              <div className="w-full flex flex-col justify-evenly h-1/4">
                <label className="uppercase text-black text-xm font-semibold" htmlFor="fullname">
                  Full Name
                </label>
                <input placeholder="Enter full name" id="fullname" value={userInfo.name} onChange={(e) => handleInputChange("name", e.target.value)} className={`rounded-3xl h-10 pl-4  bg-gray-200 outline-none border-2`} />
                {!isValidate.name && !isTyping.name && <p className="text-red-700">Please enter full name</p>}
              </div>
              <div className="w-full flex flex-col justify-evenly h-1/4">
                <label className="uppercase text-black text-xm font-semibold" htmlFor="mail">
                  Email
                </label>
                <input placeholder="Enter email address" id="mail" value={userInfo.email} onChange={(e) => handleInputChange("email", e.target.value)} className="rounded-3xl h-10 pl-4 outline-none bg-gray-200" />
                {!isValidate.email && !isTyping.email && <p className="text-red-700">Please enter correct email address</p>}
              </div>
              <div className="w-full flex flex-col justify-evenly h-1/4">
                <label className="uppercase text-black text-xm font-semibold" htmlFor="password">
                  Password
                </label>
                <input placeholder="Enter password" id="password" value={userInfo.pass} onChange={(e) => handleInputChange("pass", e.target.value)} className="rounded-3xl h-10 pl-4 outline-none bg-gray-200" />
                {!isValidate.pass && !isTyping.pass && <p className="text-red-700">Please enter minimum 6 characters</p>}
              </div>
              <div className="w-full flex flex-col justify-evenly h-1/4">
                <label className="uppercase text-black text-xm font-semibold" htmlFor="confirmPass">
                  Confirm password
                </label>
                <input placeholder="Enter password" id="confirmPass" value={userInfo.confirmPass} onChange={(e) => handleInputChange("confirmPass", e.target.value)} className="rounded-3xl h-10 pl-4 outline-none bg-gray-200" />
                {!isValidate.confirmPass && !isTyping.confirmPass && <p className="text-red-700">Password did not match</p>}
              </div>
            </div>
            <button onClick={handleSignupClick} className="w-full bg-gray-800 py-3 mt-4 rounded-3xl text-white text-lg hover:bg-gray-900 transition-all duration-300 ease-in-out">
              Sign up
            </button>
          </div>
        </div>
        <div className="w-2/4 h-full flex items-center justify-center bg-gray-800 rounded-br-2xl">
          <div className="h-full flex flex-col justify-center items-center gap-5">
            <div className="text-white font-bold text-4xl">Create new account</div>
            <p className="text-white font-medium text-base">Already have an account?</p>
            <button className="text-white font-medium text-base border-2 py-2 px-4 rounded-3xl cursor-pointer hover:scale-105" onClick={navigateToLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
