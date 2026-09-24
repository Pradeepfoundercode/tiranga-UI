import { Outlet } from "react-router-dom";

export default function WingoLayout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-page">
  <main className="mx-auto min-h-screen w-full max-w-[400px] overflow-x-hidden bg-theme text-white">
    <Outlet />
  </main>
</div>
  );
}