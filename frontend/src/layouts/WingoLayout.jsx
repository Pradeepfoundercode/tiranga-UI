import { Outlet } from "react-router-dom";

export default function WingoLayout() {
  return (
    <div className="min-h-screen bg-page">
      <main className="w-full max-w-100 mx-auto min-h-screen bg-theme text-white shadow-2xl">
        <Outlet />
      </main>
    </div>
  );
}