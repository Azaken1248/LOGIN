import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen bg-backdrop-desktop bg-cover bg-top-adjust flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-xs bg-black/10"></div>
      <div className="relative z-10">
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <SignUp setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
