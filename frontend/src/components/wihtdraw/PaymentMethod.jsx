import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageHeader from "../common/PageHeader";
import EmptyState from "../common/EmptyState";
import nodata from "../../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";
import { paymentMethodSchema } from "../../schemas/paymentMethodSchema";


function UpiLogo() {
  return (
    <div className="flex flex-col items-start select-none">
      <div className="flex items-center leading-none">
        <span className="text-[#aab1cf] font-black italic tracking-tighter text-[19px] leading-none">
          UPI
        </span>
        <div className="flex items-center ml-1">

          <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
            <path d="M1.5 0 L9 7 L1.5 14 L0 14 L7.5 7 L0 0 Z" fill="#f27022" />
          </svg>

          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" className="-ml-1">
            <path d="M1.5 0 L9 7 L1.5 14 L0 14 L7.5 7 L0 0 Z" fill="#138808" />
          </svg>
        </div>
      </div>
      <span className="text-[4.5px] text-[#7d85a6] tracking-wider uppercase font-semibold leading-none mt-0.5">
        Unified Payments Interface
      </span>
    </div>
  );
}


function FormField({
  label,
  placeholder,
  type = "text",
  maxLength,
  inputMode,
  registration,
  error,
  children,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[14px] text-white font-medium mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        {...registration}
        className="w-full h-11 px-3.5 bg-background1 text-white text-[14px] rounded-sm border-b border-[#3b4382] placeholder:text-[#6a739b] outline-none focus:border-[#64a5ff] transition-colors"
      />
      {error && (
        <span className="text-[#ea3e3e] text-[11.5px] mt-1 leading-tight">
          {error.message}
        </span>
      )}
      {children}
    </div>
  );
}

function PaymentMethod({ onBack, onAddMethod }) {
  const [isAdding, setIsAdding] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(paymentMethodSchema),
    mode: "onChange",
    defaultValues: {
      upiName: "DCHGS VCVUYS",
      phoneNumber: "",
      upiId: "",
      confirmUpiId: "",
    },
  });

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const onSubmit = (data) => {
    if (onAddMethod) {
      onAddMethod(data);
    }
    reset();
    setIsAdding(false);
  };


  if (isAdding) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen bg-theme flex flex-col justify-between text-white select-none"
      >
        <div>
          <PageHeader
            title="Payment method"
            onBack={() => setIsAdding(false)}
            titleWrapperClassName="text-center"
          />

          <div className="px-4 pt-3.5 flex flex-col gap-4">

            <div className="flex items-center gap-2 mb-1">
              <UpiLogo />
              <h2 className="text-white font-bold text-[17px] tracking-wide">
                Information UPI
              </h2>
            </div>


            <FormField
              label="UPI Name"
              placeholder="Please enter your UPI Name"
              registration={register("upiName")}
              error={errors.upiName}
            />


            <FormField
              label="Phone Number"
              placeholder="Please enter the phone number"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              registration={register("phoneNumber", {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                },
              })}
              error={errors.phoneNumber}
            >
              <div className="flex items-start gap-1.5 mt-1.5 text-[#3b82f6] text-[12px] leading-4">
                <span className="text-[13px] leading-none mt-0.5">ⓘ</span>
                <span>
                  For the security of your account, please fill in your real mobile phone number
                </span>
              </div>
            </FormField>


            <FormField
              label="UPI ID"
              placeholder="Please enter your UPI ID"
              registration={register("upiId")}
              error={errors.upiId}
            />


            <FormField
              label="Confirm UPI ID"
              placeholder="Please enter your UPI ID"
              registration={register("confirmUpiId")}
              error={errors.confirmUpiId}
            >
              <div className="mt-2 text-[#ea3e3e] text-[11.5px] leading-4.25">
                <p className="font-semibold">Security Notice:</p>
                <p>
                  For your safety, please avoid using your phone number as your UPI ID. This may expose you to potential fraud risks. Do not share OTPs or make any payments to unsolicited contacts claiming to be support.
                </p>
              </div>
            </FormField>
          </div>
        </div>


        <div className="w-full">
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full h-12 text-white font-bold text-[16px] flex items-center justify-center transition-colors shadow-md ${isValid
              ? "bg-ctive hover:bg-[#579bf5] active:bg-active cursor-pointer"
              : "bg-[#464b63] cursor-not-allowed"
              }`}
          >
            Save
          </button>
        </div>
      </form>
    );
  }


  return (
    <div className="min-h-screen bg-theme flex flex-col justify-between text-white select-none">
      <div>
        <PageHeader
          title="Payment method"
          onBack={onBack}
          titleWrapperClassName="text-center"
        />

        <div className="pt-10 flex justify-center">
          <EmptyState
            image={nodata}
            text="No payment method"
            imageClassName="w-[210px] max-w-[65%] object-contain"
            className="flex flex-col items-center"
            textClassName="text-[13px] text-[#71789e] mt-4 font-normal"
          />
        </div>
      </div>

      <div className="w-full">
        <button
          type="button"
          onClick={handleAddClick}
          className="w-full h-12 bg-active  text-white font-bold text-[16px] flex items-center justify-center transition-colors shadow-md cursor-pointer"
        > 
          Add payment method
        </button>
      </div>
    </div>
  );
}

export default PaymentMethod;



