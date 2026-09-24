import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-theme text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-text1">Page not found</p>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-6 rounded-full bg-active px-6 py-2.5 font-semibold"
      >
        Go Home
      </button>
    </div>
  );
}