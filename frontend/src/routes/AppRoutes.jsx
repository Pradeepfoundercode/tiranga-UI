import { Route, Routes } from "react-router-dom";
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

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<WingoLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<WingoPage />} />
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
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
