import { Route, Routes, useLocation } from "react-router-dom";
import WingoLayout from "../layouts/WingoLayout";
import WingoPage from "../pages/wingo/WingoPage";
import WithdrawPage from "../pages/wingo/WithdrawPage";
import Deposite from "../pages/wingo/Deposite";
import Details from "../pages/wingo/Details";
import PaymentMethod from "../components/wihtdraw/PaymentMethod";
import BankAccount from "../components/wihtdraw/BankAccount";
import HistoryPage from "../components/common/HistoryPage";
import NotFound from "../pages/NotFound/NotFound";
import nodata from "../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";
import { withdrawHistoryTabs, depositHistoryTabs } from "../constants/historyData";
import Home from "../pages/Home/Home";
import { useEffect } from "react";
import CustomerService from "../pages/Home/CustomerService";
import About from "../pages/about/About";
import Activity from "../pages/activity/Activity";
import Account from "../pages/account/Account";
import Wallet from "../pages/wallet/Wallet";
import Promotion from "../pages/promotion/Promotion";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import FirstRecharge from "../pages/activity/FirstRecharge";
import DownloadApp from "../pages/download/DownloadApp";
import ProtectedRoute from "./ProtectedRoute";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<WingoLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/customer-Service" element={<CustomerService />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/download-app" element={<DownloadApp />} />
          <Route path="/download" element={<DownloadApp />} />

          {/* Protected Routes (require login) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/wingo" element={<WingoPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/withdraw" element={<WithdrawPage />} />
            <Route path="/withdraw/payment-method" element={<PaymentMethod />} />
            <Route path="/withdraw/bank-account" element={<BankAccount />} />
            <Route
              path="/withdraw/history"
              element={
                <HistoryPage
                  title="Withdrawal history"
                  tabs={withdrawHistoryTabs}
                  emptyImage={nodata}
                  backPath="/withdraw"
                />
              }
            />
            <Route path="/deposit" element={<Deposite />} />
            <Route
              path="/deposit/history"
              element={
                <HistoryPage
                  title="Deposit history"
                  tabs={depositHistoryTabs}
                  emptyImage={nodata}
                  backPath="/deposit"
                />
              }
            />
            <Route path="/notification" element={<Details />} />
            <Route path="/activity/FirstRecharge" element={<FirstRecharge />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/promotion" element={<Promotion />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
