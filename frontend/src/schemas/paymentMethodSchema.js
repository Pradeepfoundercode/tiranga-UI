import * as z from "zod";

export const upiRegex = /^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z]{2,49}$/;

export const paymentMethodSchema = z
  .object({
    upiName: z
      .string()
      .trim()
      .min(1, "Please enter your UPI Name"),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
    upiId: z
      .string()
      .trim()
      .min(1, "Please enter your UPI ID")
      .regex(upiRegex, "Please enter a valid UPI ID (e.g. name@okhdfcbank)"),
    confirmUpiId: z
      .string()
      .trim()
      .min(1, "Please confirm your UPI ID"),
  })
  .refine((data) => data.upiId === data.confirmUpiId, {
    message: "Confirm UPI ID must match UPI ID",
    path: ["confirmUpiId"],
  });
