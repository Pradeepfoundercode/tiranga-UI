import { Outlet, useNavigate } from "react-router-dom";
import LoginRewardModal from "../components/common/LoginRewardModal";
import serviceIcon from "../assets/images/icon_sevice-6oPprZAQ.png";

export default function WingoLayout() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-page">
      <main className="mx-auto min-h-screen w-full max-w-[400px] overflow-x-hidden bg-theme text-white relative">
        <Outlet />
      </main>

      {/* Global Event Rewards Login Modal */}
      <LoginRewardModal />

      {/* Global Customer Service Floating Icon - Shifted higher up */}
      <button
        type="button"
        onClick={() => navigate("/customer-service")}
        className="fixed bottom-20 sm:bottom-16 right-2.5 sm:right-6 z-[100] flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90 cursor-pointer"
        title="Customer Service"
      >
        <img
          src={serviceIcon}
          alt="Customer Service"
          className="h-[44px] w-[44px] sm:h-[50px] sm:w-[50px] object-contain drop-shadow-xl select-none"
        />
      </button>
    </div>
  );
}