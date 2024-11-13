import { SubmitHandler, useForm } from "react-hook-form";
import bg from "../assets/login_background/aviansolutions.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface FormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (formData) => {
    const loginInformation = {
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("loginData", JSON.stringify(loginInformation)); // Save to local storage

    navigate("/dashboard");
  };

  // State for password visibility
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#dcdef2] to-[#f0f4fa] overflow-hidden">
      <div className="absolute right-[8%] top-1/4 w-1/5 md:w-1/2 lg:w-1/4 h-fit bg-white opacity-95 px-8 py-10 rounded-lg shadow-xl shadow-[#9bcfd3]/40 z-10">
        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-[#d64d45] mb-8 uppercase tracking-wide">
          Login
        </h2>

        {/* Form */}
        <form
          className="space-y-9"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-4">
            {/* Email */}
            <div className="">
              {errors.email && (
                <p className="text-red-500 text-sm font-semibold italic mb-2">
                  {errors.email.message}
                </p>
              )}
              <input
                {...register("email", {
                  required: "* Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "* Enter a valid email address",
                  },
                  validate: (value) =>
                    value === "test@dev.com" ||
                    " *Not the email provided by the administrator",
                })}
                type="email"
                id="email"
                placeholder="Email"
                className={`w-full border-b border-[#d3d3d3] py-2 px-4 text-gray-600 focus:outline-none focus:border-[#c2c2c2] ${
                  errors.email ? "border-red-500 " : "border-gray-300"
                }`}
              />
            </div>

            {/* Password */}
            <div className="relative">
              {errors.password && (
                <p className="text-red-500 text-sm font-semibold italic mb-2">
                  {errors.password.message}
                </p>
              )}
              <input
                {...register("password", {
                  required: "* Password is required",
                  minLength: {
                    value: 6,
                    message: "* Password must be at least 6 characters",
                  },
                  validate: (value) =>
                    value === "test123456@@" || "* Not the correct password",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-full border-b py-2 px-4 text-gray-600 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {/* Show Password */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-2 text-gray-500"
              >
                {!showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <input
              type="submit"
              value="Log In"
              className="bg-gradient-to-r from-[#e8716d] to-[#ff7a69] hover:from-[#e14641] hover:to-[#d53b3b] text-white py-2 px-8 rounded uppercase tracking-wider cursor-pointer transition-colors duration-200"
            />
          </div>
        </form>
      </div>

      {/* Hero Section */}
      <div className="absolute z-20 top-1/4 left-[10%] -translate-y-6 flex flex-col items-start gap-2">
        <p className="italic font-bold text-xl text-gray-500">
          For Administrator
        </p>
        <h2 className="text-[#d64d45] font-extrabold text-7xl">WELCOME</h2>
        <span className="text-[#d64d45] font-extrabold text-6xl">To</span>
      </div>

      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 -left-[15%] h-screen w-full drop-shadow-2xl shadow-[#9c6f59]/80"
      />
    </div>
  );
};

export default Login;
