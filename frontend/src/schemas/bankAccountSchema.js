import * as z from "zod";

export const bankAccountSchema = z.object({
  bankName: z.string().min(1, "Please select a bank"),
  recipientName: z.string().trim().min(1, "Please enter recipient name"),
  accountNumber: z
    .string()
    .trim()
    .min(9, "Account number must be at least 9 digits")
    .max(18, "Account number cannot exceed 18 digits")
    .regex(/^\d+$/, "Account number must contain only numbers"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  ifscCode: z
    .string()
    .trim()
    .min(11, "IFSC code must be 11 characters")
    .max(11, "IFSC code must be 11 characters"),
});