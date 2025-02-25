import React from "react";
import MainBanner from "./MainBanner";

function ConfirmedBooking() {
  return (
    <>
    <MainBanner/>
    <section className="confirmation-page">
      <h1>Booking Confirmed! 🎉</h1>
      <p>Thank you for your reservation. We look forward to seeing you!</p>
    </section>
    </>
  );
}

export default ConfirmedBooking;
