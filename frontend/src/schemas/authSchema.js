import * as z from "zod";

export const phoneLoginSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number")
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  password: z
    .string()
    .min(1, "Please enter your password")
    .min(6, "Password must be at least 6 characters"),
});

export const emailLoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Please enter your password")
    .min(6, "Password must be at least 6 characters"),
});

export const forgotPasswordSchema = z
  .object({
    phone: z
      .string()
      .trim()
      .min(1, "Please enter the phone number")
      .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
    password: z
      .string()
      .min(1, "Please enter a new password")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
    verificationCode: z
      .string()
      .trim()
      .min(1, "Please enter the confirmation code"),
    agreed: z.literal(true, {
      errorMap: () => ({ message: "Please agree to the Privacy Agreement" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

