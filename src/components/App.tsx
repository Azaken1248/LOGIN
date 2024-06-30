import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen bg-cover bg-top-adjust flex items-center justify-center bg-backdrop-mobile md:bg-backdrop-desktop">
      <div className="absolute inset-0 backdrop-blur-xs bg-black/10"></div>
      <div className="relative z-10 w-full h-full flex flex-col justify-between md:items-center md:justify-center">
        <div className="w-full h-full flex flex-col justify-center md:w-auto md:h-auto">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <SignUp setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
