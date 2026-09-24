import upi from "../assets/deposite/payNameIcon2_20250513182210std9.png";
import upiscanner from "../assets/deposite/payNameIcon_20231111232427o5u8.png";
import paytm from "../assets/deposite/payNameIcon_20231112145558u1tl.png";
import paytmscanner from "../assets/deposite/payNameIcon_20231112145400uyr5.png";
import usdt from "../assets/deposite/payNameIcon_20231129144625pc9h.png";

export const paymentMethods = [
  { id: "UPI-QR", label: "UPI-QR", icon: upi },
  { id: "UPI x QR", label: "UPI x QR", icon: upiscanner },
  { id: "E-Wallet", label: "E-Wallet", icon: paytm },
  { id: "Paytm x QR", label: "Paytm x QR", icon: paytmscanner },
];

export const depositAmounts = [100, 200, 300, 400, 500, "1K", "2K", "3K", "5K"];

export const depositInstructions = [
  "If the transfer time is up, please fill out the deposit form again.",
  "The transfer amount must match the order you created, otherwise the money cannot be credited successfully.",
  "If you transfer the wrong amount, our company will not be responsible for the lost amount!",
  "Note: do not cancel the deposit order after the money has been transferred.",
];

export const channelData = {
  "UPI-QR": [
    { name: "Phonpe_QR", balance: "100 - 50K", bonus: "3%" },
  ],
  "UPI x QR": [
    { name: "WinPay - UPI X QR", balance: "100 - 20K", bonus: "3%" },
    { name: "Ospay - UPI X QR", balance: "100 - 50K", bonus: "3%" },
    { name: "Speed2Pay - UPI X QR", balance: "200 - 50K", bonus: "3%" },
    { name: "RaPay - UPI X QR", balance: "500 - 10K", bonus: "3%" },
    { name: "UMONEY - UPI x QR", balance: "100 - 2.5K", bonus: "3%" },
    { name: "Cpu2Pay - UPI x QR", balance: "500 - 50K", bonus: "3%" },
    { name: "AroPay - UPI X QR", balance: "100 - 50K", bonus: "3%" },
    { name: "WorldPay - UPI x QR", balance: "100 - 50K", bonus: "3%" },
    { name: "NewNinePay - UPI X QR", balance: "100 - 50K", bonus: "3%" },
    { name: "RAPay - UPI X QR", balance: "100 - 50K", bonus: "3%" },
  ],
  "E-Wallet": [
    { name: "WinPay - APP", balance: "100 - 20K", bonus: "3%" },
    { name: "Ospay - APP", balance: "100 - 50K", bonus: "3%" },
    { name: "Speed2Pay - APP", balance: "200 - 50K", bonus: "3%" },
    { name: "RaPay - APP", balance: "100 - 50K", bonus: "3%" },
    { name: "Cpu2Pay - APP", balance: "500 - 50K", bonus: "3%" },
    { name: "CedarPay - APP", balance: "200 - 10K", bonus: "3%" },
    { name: "NewNinePay - APP", balance: "100 - 50K", bonus: "3%" },
  ],
  "Paytm x QR": [
    { name: "WinPay - Paytm x QR", balance: "100 - 20K", bonus: "3%" },
    { name: "AroPay - Paytm x QR", balance: "100 - 50K", bonus: "3%" },
    { name: "Yespay - Paytm x QR", balance: "100 - 5K", bonus: "3%" },
  ],
  USDT: [
    { name: "Wallet66-USDT", balance: "10 - 500K", bonus: "3%", icon: usdt },
    { name: "TronPay-USDT(TRC20)", balance: "10 - 100K", bonus: "3%", icon: usdt },
    { name: "BinancePay-USDT(TRC20)", balance: "10 - 50K", bonus: "3%", icon: usdt },
  ],
};