import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    // ("/login");
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <h1 className="text-6xl font-bold text-green-500">Welcome to homepage</h1>
    </div>
  );
}

export default Home;
