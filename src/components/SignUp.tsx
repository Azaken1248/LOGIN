import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  UserCircleIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

interface SignUpProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors: any = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/signup", formData);
      // Handle success (e.g., show a success message, redirect to login, etc.)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-tl-[180px] md:rounded-[67px] shadow-lg p-8 w-full max-w-md md:w-[561px] md:h-fit mx-0 md:mx-4 md:relative absolute bottom-0 left-0 right-0 md:bottom-auto flex flex-col justify-center md:h-[0vh]">
        <div className="flex justify-center mb-2">
          <img src={Logo} alt="CodeChef VIT Chennai Chapter" className="h-32" />
        </div>
        <h2 className="text-2xl text-custom-blue font-bold text-center mb-8">
          SIGN UP
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2 relative">
              <label className="block text-sm font-bold text-black">
                First Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircleIcon className="h-5 w-5 text-black" />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.firstName ? "border-red-500" : "border-black"
                  }`}
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
            </div>
            <div className="w-1/2 relative">
              <label className="block text-sm font-bold text-black">
                Last Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircleIcon className="h-5 w-5 text-black" />
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.lastName ? "border-red-500" : "border-black"
                  }`}
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>
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
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.email ? "border-red-500" : "border-black"
                }`}
                placeholder="some.mail@university.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-bold text-black">
              Phone Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon className="h-5 w-5 text-black" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.phone ? "border-red-500" : "border-black"
                }`}
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
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
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.password ? "border-red-500" : "border-black"
                }`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-bold text-black">
              Confirm Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-black" />
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.confirmPassword ? "border-red-500" : "border-black"
                }`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[43px] shadow-sm text-3xl font-medium text-white bg-custom-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-between items-center mt-3 ml-2 mr-2">
            <p className="text-sm text-3x1 text-black">
              Already have an account?
            </p>
            <a
              href="#"
              className="font-medium text-custom-blue-darker hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(true);
              }}
            >
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
