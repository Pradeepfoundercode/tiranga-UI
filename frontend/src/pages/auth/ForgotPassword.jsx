import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
  Shield,
  Check,
} from "lucide-react";
import Header from "../../components/Header";
import { forgotPasswordSchema } from "../../schemas/authSchema";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onSubmit",
    defaultValues: {
      phone: "",
      password: "",
      confirmPassword: "",
      verificationCode: "",
      agreed: false,
    },
  });

  const agreed = watch("agreed");

  const handleSendCode = async () => {
    if (countdown > 0) return;

    // Validate phone using Zod schema
    const isPhoneValid = await trigger("phone");
    if (!isPhoneValid) return;

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
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log("Password reset successfully:", data);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Password reset error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-theme text-white">
      {/* Header with back arrow and Tiranga logo */}
      <Header
        showRight={false}
        className="bg-theme"
        onBack={() => navigate(-1)}
      />

      {/* Blue Banner */}
      <div className="bg-gradient-to-r from-[#2072f5] via-[#248afb] to-[#2aa2ff] px-4 py-3.5">
        <h1 className="text-[19px] font-bold text-white tracking-wide">
          Forgot password
        </h1>
        <p className="mt-1 text-[11.5px] leading-[16px] text-white/90">
          Please retrieve/change your password through your mobile phone number or email
        </p>
      </div>

      {/* Tab: Phone Reset */}
      <div className="pt-4 pb-0">
        <div className="flex flex-col items-center justify-center">
          <Smartphone className="h-[22px] w-[22px] text-[#3ba8fd]" />
          <span className="mt-1 text-[14px] font-medium text-[#3ba8fd]">
            Phone Reset
          </span>
        </div>
      </div>

      {/* Reset Form */}
      <div className="px-4 pt-5 pb-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col space-y-4"
        >
          {/* Phone Number */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <Smartphone className="h-4 w-4 text-[#2b9fee]" />
              <span>Phone number</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Static Country Code */}
              <div className="flex h-[44px] w-[82px] select-none items-center justify-between rounded-lg bg-[#2b3469] px-3 text-[14px] font-medium text-white">
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
                  autoComplete="off"
                  placeholder="Please enter the phone number"
                  {...register("phone")}
                  className="w-full bg-transparent text-[13.5px] text-white placeholder-[#5d6b9d] outline-none"
                />
              </div>
            </div>

            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* A new password */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <Lock className="h-4 w-4 text-[#2b9fee]" />
              <span>A new password</span>
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
                placeholder="A new password"
                {...register("password")}
                className="w-full bg-transparent text-[13.5px] text-white placeholder-[#5d6b9d] outline-none"
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

          {/* Confirm new password */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <Lock className="h-4 w-4 text-[#2b9fee]" />
              <span>Confirm new password</span>
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
                placeholder="Confirm new password"
                {...register("confirmPassword")}
                className="w-full bg-transparent text-[13.5px] text-white placeholder-[#5d6b9d] outline-none"
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

          {/* Verification Code */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-white">
              <Shield className="h-4 w-4 text-[#2b9fee]" />
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
                autoComplete="off"
                placeholder="Please enter the confirmation code"
                {...register("verificationCode")}
                className="w-full bg-transparent text-[13.5px] text-white placeholder-[#5d6b9d] outline-none"
              />

              <button
                type="button"
                onClick={handleSendCode}
                className="flex h-[32px] shrink-0 items-center justify-center rounded-full bg-[#2b9fee] px-5 text-[13px] font-medium text-white transition active:scale-95 hover:bg-[#258de0]"
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
                <span
                  onClick={() => setValue("agreed", !agreed, { shouldValidate: true })}
                  className="cursor-pointer text-[#e83f3f]"
                >
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

          {/* Action Button: Reset */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-[44px] w-full items-center justify-center rounded-full bg-[#2b9fee] text-[15px] font-semibold text-white shadow-md shadow-[#2b9fee]/30 transition active:scale-[0.98] hover:bg-[#258de0] disabled:opacity-60"
            >
              {isLoading ? "Resetting..." : "Reset"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
