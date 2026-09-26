import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Smartphone,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
  Check,
  CreditCard,
} from "lucide-react";
import Header from "../../components/Header";

// Zod schema for Register
const registerSchema = z
  .object({
    phone: z
      .string()
      .trim()
      .min(1, "Please enter the phone number")
      .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
    verificationCode: z
      .string()
      .trim()
      .min(1, "Please enter the confirmation code"),
    password: z
      .string()
      .min(1, "Please set a password")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
    inviteCode: z.string().optional(),
    agreed: z.literal(true, {
      errorMap: () => ({ message: "Please agree to the Privacy Agreement" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    defaultValues: {
      phone: "",
      verificationCode: "",
      password: "",
      confirmPassword: "",
      inviteCode: "1888419966604",
      agreed: true,
    },
  });

  const agreed = watch("agreed");

  const handleSendCode = () => {
    if (countdown > 0) return;
    setCountdown(60);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    console.log("Verification code requested for registration");
  };

  const onSubmit = (data) => {
    // Only console.log the data, no localStorage or state saving
    console.log("Register Form Data:", data);
  };

  return (
    <div className="w-full bg-theme text-white">
      {/* Header */}
      <Header
        showRight={false}
        className="bg-theme"
        onBack={() => navigate(-1)}
      />

      <div className="px-4 pb-10">
        {/* Title & Subtitle */}
        <div className="mt-2">
          <h1 className="text-[20px] font-bold tracking-tight text-white">
            Register
          </h1>
          <p className="mt-1 text-[12px] leading-[17px] text-[#8e9bc5]">
            Please register by phone number or email
          </p>
        </div>

        {/* Tab: Register your phone */}
        <div className="mt-5 flex border-b border-[#2d3767]">
          <div className="relative flex flex-1 flex-col items-center justify-center pb-2.5">
            <div className="flex items-center gap-2 text-[14px] font-medium text-white">
              <Smartphone className="h-[18px] w-[18px] text-[#2b9fee]" />
              <span>Register your phone</span>
            </div>
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2b9fee]" />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-5 flex flex-col space-y-4"
        >
          {/* Phone Number Input */}
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

              {/* Phone Input */}
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

          {/* Verification Code */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <ShieldCheck className="h-4 w-4 text-[#2b9fee]" />
              <span>Verification Code</span>
            </div>

            <div
              className={`flex h-[44px] w-full items-center justify-between rounded-lg bg-[#2b3469] pl-3.5 pr-1.5 focus-within:ring-1 ${
                errors.verificationCode
                  ? "ring-1 ring-red-400"
                  : "focus-within:ring-[#2b9fee]"
              }`}
            >
              <input
                type="text"
                placeholder="Please enter the confirmation code"
                {...register("verificationCode")}
                className="w-full bg-transparent text-[14px] text-white placeholder-[#626e9c] outline-none"
              />

              <button
                type="button"
                onClick={handleSendCode}
                className="flex h-[32px] shrink-0 items-center justify-center rounded-lg bg-[#2b9fee] px-4 text-[12px] font-medium text-white transition active:scale-95"
              >
                {countdown > 0 ? `${countdown}s` : "Send"}
              </button>
            </div>

            {errors.verificationCode && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.verificationCode.message}
              </p>
            )}
          </div>

          {/* Set password */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <Lock className="h-4 w-4 text-[#2b9fee]" />
              <span>Set password</span>
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
                placeholder="Set password"
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

          {/* Confirm password */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <Lock className="h-4 w-4 text-[#2b9fee]" />
              <span>Confirm password</span>
            </div>

            <div
              className={`flex h-[44px] w-full items-center justify-between rounded-lg bg-[#2b3469] px-3.5 focus-within:ring-1 ${
                errors.confirmPassword
                  ? "ring-1 ring-red-400"
                  : "focus-within:ring-[#2b9fee]"
              }`}
            >
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword")}
                className="w-full bg-transparent text-[14px] text-white placeholder-[#626e9c] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="ml-2 flex h-7 w-7 items-center justify-center text-[#6a76a5] hover:text-white"
              >
                {showConfirmPassword ? (
                  <Eye className="h-[18px] w-[18px]" />
                ) : (
                  <EyeOff className="h-[18px] w-[18px]" />
                )}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Invite code */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <CreditCard className="h-4 w-4 text-[#2b9fee]" />
              <span>Invite code</span>
            </div>

            <div className="flex h-[44px] w-full items-center rounded-lg bg-[#2b3469] px-3.5 focus-within:ring-1 focus-within:ring-[#2b9fee]">
              <input
                type="text"
                placeholder="1888419966604"
                {...register("inviteCode")}
                className="w-full bg-transparent text-[14px] text-white placeholder-[#626e9c] outline-none"
              />
            </div>
          </div>

          {/* Privacy Agreement Checkbox */}
          <div className="pt-1">
            <div className="flex items-center gap-2 text-[12px] text-[#8e9bc5]">
              <button
                type="button"
                onClick={() => setValue("agreed", !agreed, { shouldValidate: true })}
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition ${
                  agreed
                    ? "border-[#2b9fee] bg-[#2b9fee]"
                    : "border-[#5d6b9d] bg-transparent"
                }`}
              >
                {agreed && <Check className="h-3 w-3 stroke-[3] text-white" />}
              </button>
              <div className="select-none">
                <span>I have read and agree </span>
                <span className="cursor-pointer text-[#e83f3f]">
                  【Privacy Agreement】
                </span>
              </div>
            </div>

            {errors.agreed && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.agreed.message}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              type="submit"
              className="flex h-[44px] w-full items-center justify-center rounded-full bg-[#2b9fee] text-[15px] font-semibold text-white shadow-md shadow-[#2b9fee]/30 transition active:scale-[0.98]"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="flex h-[44px] w-full items-center justify-center gap-1.5 rounded-full border border-[#37457c] bg-transparent text-[14px] text-[#93a0c7] transition active:scale-[0.98] hover:border-[#2b9fee]"
            >
              <span>I have an account</span>
              <span className="font-semibold text-[#2b9fee]">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
