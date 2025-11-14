"use client";

import React, { useState, ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logo/Logo.png";
import Link from "next/link";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!agreeToTerms) {
      alert("Please agree to the Terms of Service");
      return;
    }
    // Handle registration logic here
    console.log("Registration attempted with:", formData);
  };

  return (
    <div className="bg-[#1E1E1E] max-w-2xl w-full justify-items-center shadow-2xl rounded-2xl relative py-10 ">
      <div className="py-10 w-full max-w-[340px]">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <Link href="#" className="block">
              <Image
                src={logo}
                alt="Logo"
                className="w-[150px] lg:w-[300px] h-auto"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-xl font-semibold ">
            Create an Account
          </h1>
          <p className="text-primary text-sm">
            Sign up now to get started with an account.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-[#303030] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#303030] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full bg-[#303030] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-[#303030] text-white rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-[#303030] text-white rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="w-4 h-4 text-orange-500 bg-[#303030] border-gray-600 rounded focus:ring-primary focus:ring-1 mt-1"
            />
            <label htmlFor="terms" className="ml-2 text-white text-sm">
              I have read and agree to the{" "}
              <Link
                href="#"
                className="text-primary hover:text-orange-500 transition-colors underline"
              >
                Terms of Service
              </Link>
            </label>
          </div>

          {/* Get Started Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-primary hover:bg-white  hover:text-black  text-white font-semibold py-2 rounded-lg transition-colors duration-200"
          >
            Get Started
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </button>
          <button className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-[#303030] rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            href="/log-in"
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;