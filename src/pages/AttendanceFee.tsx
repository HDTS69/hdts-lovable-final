import { useState } from "react";
import { PaymentSection } from "@/components/payment-section";
import { StickyHeader } from "@/components/StickyHeader";
import { smoothScrollTo } from "@/utils/smoothScroll";

const AttendanceFee = () => {
  const handleBack = () => {
    // No-op since we're on the main page
  };

  const scrollToBooking = () => {
    // Navigate to booking page and scroll to booking section
    window.location.href = '/booking#booking-section';
  };

  return (
    <>
      <StickyHeader scrollToBooking={scrollToBooking} />
      <div className="min-h-screen bg-[#F8F9FA] py-20">
        <div className="container px-4 max-w-lg mx-auto">
          <PaymentSection onBack={handleBack} />
        </div>
      </div>
    </>
  );
};

export default AttendanceFee;