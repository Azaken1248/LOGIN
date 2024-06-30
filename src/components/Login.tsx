import React from "react";
import Logo from "../assets/logo.png";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";

interface LoginProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-tl-[180px] md:rounded-[67px] shadow-lg p-8 w-full max-w-md md:w-[561px] md:h-[555px] mx-0 md:mx-4 md:relative absolute bottom-0 left-0 right-0 md:bottom-auto flex flex-col justify-center h-[85vh]">
        <div className="flex justify-center mb-2">
          <img src={Logo} alt="CodeChef VIT Chennai Chapter" className="h-32" />
        </div>
        <h2 className="text-2xl text-custom-blue font-bold text-center mb-8">
          LOGIN
        </h2>
        <form>
          <div className="mb-4 relative">
            <label className="block text-sm font-bold text-black">
              Email ID
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserCircleIcon className="h-5 w-5 text-black" />
              </div>
              <input
                type="email"
                name="email"
                className="appearance-none block w-full pl-10 pr-3 py-2 border-2 border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="some.mail@university.com"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-bold text-black">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-black" />
              </div>
              <input
                type="password"
                name="password"
                className="appearance-none block w-full pl-10 pr-3 py-2 border-2 border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="********"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-custom-blue-darker">
                Remember Me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-custom-blue-darker hover:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[43px] shadow-sm text-3xl font-medium text-white bg-custom-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
          <div className="flex justify-between items-center mt-3 ml-2 mr-2">
            <p className="text-sm text-black">Don’t have an account?</p>
            <a
              href="#"
              className="font-medium text-custom-blue-darker hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(false);
              }}
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
