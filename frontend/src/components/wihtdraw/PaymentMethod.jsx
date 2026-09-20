import React from "react";
import PageHeader from "../common/PageHeader";

function PaymentMethod({ onBack }) {
  return (
    <div className="min-h-screen bg-[#262b5e] text-white">
      <PageHeader
        title="Payment Method"
        onBack={onBack}
        titleWrapperClassName="text-center"
      />
    </div>
  );
}

export default PaymentMethod;
