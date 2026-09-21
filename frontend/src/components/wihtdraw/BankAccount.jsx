import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Landmark,
  User,
  CreditCard,
  Smartphone,
  KeyRound,
  Info,
  ChevronRight,
} from "lucide-react";

import addDoZcp31 from "../../assets/withdraw/add-DoZcp313.png";

import PageHeader from "../common/PageHeader";
import { bankAccountSchema } from "../../schemas/bankAccountSchema";
import { getAccountView } from "../../services/api/wingoServices.js";

const accountFields = [
  { label: "Bank name", key: "bank_name" },
  { label: "Account Number", key: "account_number" },
  { label: "Branch", key: "branch" },
  { label: "IFSC Code", key: "ifsc_code" },
  { label: "Account Holder", key: "name" },
];

const BANK_OPTIONS = [
  "Bank of Baroda",
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Punjab National Bank",
  "Canara Bank",
  "Union Bank of India",
  "Kotak Mahindra Bank",
  "IndusInd Bank",
];

const inputClass =
  "w-full h-11 px-3.5 bg-background1 text-white rounded-[6px] outline-none focus:ring-1 focus:ring-active";

function BankFormField({ label, icon: Icon, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-white font-semibold text-[14px]">
        <Icon size={18} className="text-[#4e92eb] shrink-0" />
        <span>{label}</span>
      </div>

      {children}

      {error && (
        <span className="text-[#f85d5d] text-[11.5px] leading-tight">
          {error.message}
        </span>
      )}
    </div>
  );
}

function AccountCard({ account, selected, onSelect }) {
  return (
    <div className="w-full bg-[#303676] rounded-lg overflow-hidden mb-3.5">
      <div className="w-full h-8 bg-active" />

      <div className="p-3">
        <div className="flex flex-col gap-2">
          {accountFields.map(({ label, key }) => (
            <div
              key={key}
              className="w-full h-9.5 bg-theme rounded-sm px-3 flex items-center justify-between"
            >
              <span className="text-[13px] text-[#8e96c4] font-medium">
                {label}
              </span>

              <span className="text-[13.5px] text-white font-semibold tracking-wide">
                {account[key] || "-"}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onSelect(account.id)}
          className="mt-3.5 flex items-center gap-2 px-1 cursor-pointer"
        >
          <span
            className={`w-4.25 h-4.25 rounded-full border-2 flex items-center justify-center ${selected ? "border-[#e5aa3a]" : "border-[#555d8a]"
              }`}
          >
            {selected && (
              <span className="w-1.75 h-1.75 rounded-full bg-[#e5aa3a]" />
            )}
          </span>

          <span className="text-[14px] text-white font-medium">Select</span>
        </button>
      </div>
    </div>
  );
}

function AddAccount({ onBack, onSave }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(bankAccountSchema),
    mode: "onChange",
    defaultValues: {
      bankName: "Bank of Baroda",
      recipientName: "",
      accountNumber: "",
      phoneNumber: "",
      ifscCode: "",
    },
  });

  const handleFormSubmit = (data) => {
    const account = {
      id: Date.now(),
      bank_name: data.bankName,
      account_number: data.accountNumber,
      branch: data.branch || "Lucknow",
      ifsc_code: data.ifscCode,
      name: data.recipientName,
    };

    onSave(account);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="min-h-screen bg-theme text-white select-none flex flex-col"
    >
      <div>
        <PageHeader
          title="Add a bank account number"
          onBack={onBack}
          titleWrapperClassName="text-center"
        />

        <div className="px-4 pt-3.5 flex flex-col gap-5">
          <div className="w-full bg-[#292e5c] rounded-full px-4 py-2.5 flex items-center gap-2.5">
            <Info size={19} className="text-[#38bdf8] shrink-0" />

            <span className="text-[#f85d5d] text-[12px] leading-tight font-medium">
              To ensure the safety of your funds, please bind your bank account
            </span>
          </div>

          <BankFormField label="Choose a bank" icon={Landmark}>
            <div className="relative w-full">
              <select
                {...register("bankName")}
                className="w-full h-11 px-3.5 pr-10 rounded-md bg-background1 text-white font-semibold text-[14px] outline-none appearance-none cursor-pointer"
              >
                {BANK_OPTIONS.map((bank) => (
                  <option
                    key={bank}
                    value={bank}
                    className="bg-[#303676] text-white"
                  >
                    {bank}
                  </option>
                ))}
              </select>

              <ChevronRight
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"
              />
            </div>
          </BankFormField>

          <BankFormField
            label="Full recipient's name"
            icon={User}
            error={errors.recipientName}
          >
            <input
              type="text"
              {...register("recipientName")}
              placeholder="Full recipient's name"
              className={`${inputClass} text-[14px] font-semibold `}
            />
          </BankFormField>

          <BankFormField
            label="Bank account number"
            icon={CreditCard}
            error={errors.accountNumber}
          >
            <input
              type="text"
              inputMode="numeric"
              placeholder="Please enter your bank account number"
              {...register("accountNumber", {
                onChange: (event) => {
                  event.target.value = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 18);
                },
              })}
              className={`${inputClass} text-[13.5px] placeholder:text-[#5e6998] `}
            />
          </BankFormField>

          <BankFormField
            label="Phone number"
            icon={Smartphone}
            error={errors.phoneNumber}
          >
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="Please enter your phone number"
              {...register("phoneNumber", {
                onChange: (event) => {
                  event.target.value = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                },
              })}
              className={`${inputClass} text-[13.5px] placeholder:text-[#5e6998]`}
            />
          </BankFormField>

          <BankFormField
            label="IFSC code"
            icon={KeyRound}
            error={errors.ifscCode}
          >
            <input
              type="text"
              maxLength={11}
              placeholder="Please enter IFSC code"
              {...register("ifscCode", {
                onChange: (event) => {
                  event.target.value = event.target.value
                    .toUpperCase()
                    .slice(0, 11);
                },
              })}
              className={`${inputClass} text-[13.5px] placeholder:text-[#5e6998] uppercase`}
            />
          </BankFormField>
        </div>
      </div>

      <div className="mt-auto px-4 pb-8 pt-10">
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full h-11 rounded-full text-white font-bold text-[16px] tracking-[0.25em] flex items-center justify-center transition-colors shadow-md ${isValid
            ? "bg-[#257bf4] hover:bg-[#1f70df] active:bg-[#1a62c5] cursor-pointer"
            : "bg-[#454a62] cursor-not-allowed"
            }`}
        >
          Save
        </button>
      </div>
    </form>
  );
}

function AddAccountCard({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3.5 w-full h-28.75 bg-[#303676] rounded-lg flex flex-col items-center justify-center hover:bg-[#343b82] active:bg-[#2b316b] transition-colors cursor-pointer"
    >
      <div className="mb-2 flex flex-col items-center justify-center">
        <div className="relative w-12 h-12 ">
          <img src={addDoZcp31} alt="" />
        </div>

        <span className="text-[14px] text-[#8690c0] font-medium">
          Add a bank account number
        </span>
      </div>


    </button>
  );
}

export default function BankAccount({
  onBack,
  onAddAccount,
  userId = 1,
}) {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);

        const { data } = await getAccountView(userId);

        const list = Array.isArray(data?.data)
          ? data.data
          : data?.data
            ? [data.data]
            : [];

        setAccounts(list);
        setSelectedAccountId(list[0]?.id ?? null);
      } catch (error) {
        console.error("Failed to fetch bank accounts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [userId]);

  const handleSaveAccount = (account) => {
    setAccounts((prev) => [account, ...prev]);
    setSelectedAccountId(account.id);
    setIsAdding(false);

    onAddAccount?.(account);
  };

  if (isAdding) {
    return (
      <AddAccount
        onBack={() => setIsAdding(false)}
        onSave={handleSaveAccount}
      />
    );
  }

  return (
    <div className="min-h-screen bg-theme text-white select-none">
      <PageHeader
        title="Bank account"
        onBack={onBack}
        titleWrapperClassName="text-center"
      />

      <div className="px-3 pt-3">
        {loading ? (
          <div className="w-full bg-[#303676] rounded-lg p-8 flex flex-col items-center justify-center gap-3">
            <div className="w-6 h-6 border-2 border-[#257bf4] border-t-transparent rounded-full animate-spin" />

            <span className="text-[13px] text-[#8e96c4]">
              Loading bank account details...
            </span>
          </div>
        ) : (
          <>
            {accounts.map((account) => (
              <AccountCard
                key={account.id}
                account={account}
                selected={selectedAccountId === account.id}
                onSelect={setSelectedAccountId}
              />
            ))}

            <AddAccountCard onClick={() => setIsAdding(true)} />
          </>
        )}
      </div>
    </div>
  );
}