import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import MainBanner from "./MainBanner";
import { fetchData, submitAPI } from "..//utils";

import "../Styles.css";

    // ✅ Load reservations from localStorage and convert arrays to Sets
    const loadReservations = () => {
        const storedReservations = localStorage.getItem("reservations");
        if (storedReservations) {
          try {
            const parsed = JSON.parse(storedReservations);
            const converted = {};
      
            for (const date in parsed) {
              // ✅ Make sure we pass an array to the Set constructor
              if (Array.isArray(parsed[date])) {
                converted[date] = new Set(parsed[date]);
              } else {
                converted[date] = new Set(); // Handle unexpected data gracefully
              }
            }
      
            return converted;
          } catch (error) {
            console.error("Failed to parse reservations:", error);
            return {}; // Return an empty object if there's an error
          }
        }
      
        return {}; // No data found, return an empty object
      };
      
    
    // ✅ Initialize available times for today
    const initializeTimes = () => {
        const today = new Date().toISOString().split("T")[0];
        return fetchData(today);
    };
    
    // ✅ Reducer for updating times based on selected date
    const updateTimes = (state, action) => {
        switch (action.type) {
        case "UPDATE_TIMES":
            return fetchData(action.payload);
        default:
            return state;
        }
    };



function Reservations() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [reservations, setReservations] = useState(loadReservations);
    const navigate = useNavigate();

    // ✅ Save reservations to localStorage (convert Set back to Array)
  useEffect(() => {
    const reservationsToSave = {};
    for (const date in reservations) {
      reservationsToSave[date] = Array.from(reservations[date]);
    }
    localStorage.setItem("reservations", JSON.stringify(reservationsToSave));
  }, [reservations]);

  // ✅ Handle form submission
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      handleReservation(formData.date, formData.time);
      navigate("/confirmation");
    } else {
      alert("Failed to submit reservation. Please try again.");
    }
  };

  // ✅ Add reservation to the state
  const handleReservation = (date, time) => {
    setReservations((prevReservations) => {
      const updatedReservations = { ...prevReservations };
      if (!updatedReservations[date]) {
        updatedReservations[date] = new Set();
      }
      updatedReservations[date].add(time);
      return updatedReservations;
    });
  };

    return (
        <>
        <MainBanner/>
        <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        reservations={reservations}
        onReserve={handleReservation}
        submitForm={submitForm}
      />
        </>
    );
}

export default Reservations;