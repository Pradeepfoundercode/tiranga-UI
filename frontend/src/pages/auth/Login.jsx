import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";
import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext";
import { phoneLoginSchema, emailLoginSchema } from "../../schemas/authSchema";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState("phone"); // "phone" | "email"
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Setup react-hook-form with zodResolver
  const currentSchema = activeTab === "phone" ? phoneLoginSchema : emailLoginSchema;

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(currentSchema),
    mode: "onSubmit",
    defaultValues: {
      phone: "",
      email: "",
      password: "",
    },
  });

  // If already logged in, redirect to /home
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Load saved credentials from localStorage if any
  useEffect(() => {
    try {
      const saved = localStorage.getItem("user");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.phone) {
          setActiveTab("phone");
          setValue("phone", parsed.phone);
        } else if (parsed.email) {
          setActiveTab("email");
          setValue("email", parsed.email);
        }
        if (parsed.password) {
          setValue("password", parsed.password);
        }
      }
    } catch {
      // ignore
    }
  }, [setValue]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    clearErrors();
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    try {
      login({
        loginType: activeTab,
        phone: data.phone || "",
        email: data.email || "",
        password: data.password,
      });

      sessionStorage.setItem("show_bonus_popup", "true");
      toast.success("Login successful!");
      navigate("/home", { replace: true, state: { showPopup: true } });
    } catch {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-theme text-white">
      {/* Header with back icon and Tiranga logo */}
      <Header
        showRight={false}
        className="bg-theme"
        onBack={() => navigate(-1)}
      />

      <div className="px-4 pb-10">
        {/* Title & Subtitle */}
        <div className="mt-2">
          <h1 className="text-[20px] font-bold tracking-tight text-white">
            Log in
          </h1>
          <p className="mt-1 text-[12px] leading-[17px] text-[#8e9bc5]">
            Please log in with your phone number or email
            <br />
            If you forget your password, please contact customer service
          </p>
        </div>

        {/* Tabs: Phone Number | Email */}
        <div className="mt-5 flex border-b border-[#2d3767]">
          <button
            type="button"
            onClick={() => handleTabChange("phone")}
            className={`relative flex flex-1 flex-col items-center justify-center pb-2.5 transition-colors ${
              activeTab === "phone" ? "text-white" : "text-[#6d7ba8]"
            }`}
          >
            <div className="flex items-center gap-2 text-[14px] font-medium">
              <Smartphone
                className={`h-[18px] w-[18px] ${
                  activeTab === "phone" ? "text-[#2b9fee]" : "text-[#6d7ba8]"
                }`}
              />
              <span>Phone Number</span>
            </div>
            {activeTab === "phone" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2b9fee]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("email")}
            className={`relative flex flex-1 flex-col items-center justify-center pb-2.5 transition-colors ${
              activeTab === "email" ? "text-white" : "text-[#6d7ba8]"
            }`}
          >
            <div className="flex items-center gap-2 text-[14px] font-medium">
              <Mail
                className={`h-[18px] w-[18px] ${
                  activeTab === "email" ? "text-[#2b9fee]" : "text-[#6d7ba8]"
                }`}
              />
              <span>Email</span>
            </div>
            {activeTab === "email" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2b9fee]" />
            )}
          </button>
        </div>

        {/* Form managed with React Hook Form & Zod */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-5 flex flex-col space-y-4"
        >
          {/* Phone Number Input */}
          {activeTab === "phone" && (
            <div>
              <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
                <Smartphone className="h-4 w-4 text-[#2b9fee]" />
                <span>Phone number</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Static Country Code */}
                <div className="flex h-[44px] w-[84px] select-none items-center justify-between rounded-lg bg-[#2b3469] px-3 text-[14px] font-medium text-white">
                  <span>+91</span>
                  <ChevronDown className="h-4 w-4 text-[#8a98c5]" />
                </div>

                {/* Phone Input with RHF register */}
                <div
                  className={`flex h-[44px] flex-1 items-center rounded-lg bg-[#2b3469] px-3.5 focus-within:ring-1 ${
                    errors.phone
                      ? "ring-1 ring-red-400"
                      : "focus-within:ring-[#2b9fee]"
                  }`}
                >
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Please enter the phone number"
                    autoComplete="off"
                    {...register("phone")}
                    className="w-full bg-transparent text-[14px] text-white placeholder-[#626e9c] outline-none"
                  />
                </div>
              </div>

              {errors.phone && (
                <p className="mt-1 text-[11px] text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </div>
          )}

          {/* Email Input */}
          {activeTab === "email" && (
            <div>
              <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
                <Mail className="h-4 w-4 text-[#2b9fee]" />
                <span>Email</span>
              </div>

              <div
                className={`flex h-[44px] w-full items-center rounded-lg bg-[#2b3469] px-3.5 focus-within:ring-1 ${
                  errors.email
                    ? "ring-1 ring-red-400"
                    : "focus-within:ring-[#2b9fee]"
                }`}
              >
                <input
                  type="email"
                  placeholder="Please enter your email"
                  {...register("email")}
                  className="w-full bg-transparent text-[14px] text-white placeholder-[#626e9c] outline-none"
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-[11px] text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}

          {/* Password Input */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <Lock className="h-4 w-4 text-[#2b9fee]" />
              <span>Password</span>
            </div>

            <div
              className={`flex h-[44px] w-full items-center justify-between rounded-lg bg-[#2b3469] px-3.5 focus-within:ring-1 ${
                errors.password
                  ? "ring-1 ring-red-400"
                  : "focus-within:ring-[#2b9fee]"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="w-full bg-transparent text-[14px] text-white placeholder-[#626e9c] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-2 flex h-7 w-7 items-center justify-center text-[#6a76a5] hover:text-white"
              >
                {showPassword ? (
                  <Eye className="h-[18px] w-[18px]" />
                ) : (
                  <EyeOff className="h-[18px] w-[18px]" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Password & Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex cursor-pointer select-none items-center gap-2 text-[12px] text-[#7582b0]">
              <button
                type="button"
                onClick={() => setRememberPassword((prev) => !prev)}
                className={`flex h-4 w-4 items-center justify-center rounded-full border transition ${
                  rememberPassword
                    ? "border-[#2b9fee] bg-[#2b9fee]"
                    : "border-[#5d6b9d] bg-transparent"
                }`}
              >
                {rememberPassword && (
                  <Check className="h-3 w-3 stroke-[3] text-white" />
                )}
              </button>
              <span onClick={() => setRememberPassword((prev) => !prev)}>
                Remember password
              </span>
            </label>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-[12px] text-[#2b9fee] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-[44px] w-full items-center justify-center rounded-full bg-[#2b9fee] text-[15px] font-semibold text-white shadow-md shadow-[#2b9fee]/30 transition active:scale-[0.98] disabled:opacity-60"
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/register")}
              disabled={isLoading}
              className="flex h-[44px] w-full items-center justify-center rounded-full border border-[#2b9fee] bg-transparent text-[15px] font-semibold text-[#2b9fee] transition active:scale-[0.98] hover:bg-[#2b9fee]/10"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
