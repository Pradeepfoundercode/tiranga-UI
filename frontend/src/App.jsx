import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import { queryClient } from "./services/queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <Toaster />
    </QueryClientProvider>
  );
}