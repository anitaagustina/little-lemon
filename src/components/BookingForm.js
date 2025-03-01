import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, reservations, onReserve, submitForm }) {
  const [chosenDate, setChosenDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberGuest, setNumberGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  // ✅ Check if the time slot is already reserved
  const isTimeReserved = (date, time) => {
    return reservations[date]?.has(time) || false;
  };

  // ✅ Form validation
  const getIsFormValid = () => {
    return (
      chosenDate &&
      selectedTime &&
      numberGuest &&
      occasion &&
      !isTimeReserved(chosenDate, selectedTime)
    );
  };

  const clearForm = () => {
    setChosenDate("");
    setSelectedTime("");
    setOccasion("");
    setNumberGuest("");
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTimeReserved(chosenDate, selectedTime)) {
      alert("This time slot is already reserved. Please choose another.");
      return;
    }

    const formData = {
      date: chosenDate,
      time: selectedTime,
      guests: numberGuest,
      occasion: occasion,
    };

    onReserve(chosenDate, selectedTime);
    submitForm(formData);
    clearForm();
  };

  // ✅ Update available times based on selected date
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setChosenDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  return (
    <section className="table-reservations" aria-labelledby="reservation-heading">
      <h3 id="reservation-heading">Reserve a Table</h3>
      <form className="form-reserve" onSubmit={handleSubmit} aria-live="polite">


          {/* Date Input */}
          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            value={chosenDate}
            onChange={handleDateChange}
            required
            aria-label="Reservation Date"
            
          />
        {!chosenDate && <p className="error-msg">You must choose the date.</p>}
          {/* Time Select */}
          <label htmlFor="res-time">Choose Time</label>
          <select
            id="res-time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            aria-label="Select a time for your reservation"
          >
            <option value="">Select Time</option>
            {availableTimes.map((time, index) => (
              <option
                key={index}
                value={time}
                required
                disabled={isTimeReserved(chosenDate, time)}
                aria-label={isTimeReserved(chosenDate, time) ? `${time} Reserved` : `${time} Available`}
              >
                {time} {isTimeReserved(chosenDate, time) ? "- Reserved" : ""}
              </option>
            ))}
          </select>
          {!selectedTime && <p className="error-msg">You must choose your preferred time.</p>}

          {/* Guest Number Input */}
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={numberGuest}
            onChange={(e) => setNumberGuest(e.target.value)}
            required
            aria-label="Number of guests"
          />
        {numberGuest <= 0 && <p className="error-msg">Guests must be at least 1.</p>}
          {/* Occasion Select */}
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
            aria-label="Occasion for reservation"
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {!occasion && <p className="error-msg">You must choose the occasion.</p>}

        {/* Submit Button */}
        <button
          className="main-btn"
          type="submit"
          disabled={!getIsFormValid()}
          aria-label="Submit reservation"
        >
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
