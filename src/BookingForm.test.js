import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import "@testing-library/jest-dom/extend-expect";

describe("BookingForm Component", () => {
  const mockDispatch = jest.fn();
  const mockOnReserve = jest.fn();
  const mockSubmitForm = jest.fn();
  const mockReservations = {};
  const availableTimes = ["17:00", "18:00", "19:00", "20:00"];

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        reservations={mockReservations}
        onReserve={mockOnReserve}
        submitForm={mockSubmitForm}
      />
    );
  });

  // ✅ Step 1: Test HTML5 Validation
  test("renders date input with correct attributes", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
  });

  test("renders time select with correct attributes", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("renders guest input with correct min/max values", () => {
    const guestInput = screen.getByLabelText(/number of guests/i);
    expect(guestInput).toHaveAttribute("type", "number");
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "10");
    expect(guestInput).toBeRequired();
  });

  test("renders occasion select with correct attributes", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  // ✅ Step 2: JavaScript Validation Tests
  test("disables submit button if form is incomplete", () => {
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test("enables submit button when all fields are valid", () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-06-15" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).not.toBeDisabled();
  });

  test("displays error when trying to book a reserved time", () => {
    const reservations = { "2025-06-15": new Set(["18:00"]) };

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        reservations={reservations}
        onReserve={mockOnReserve}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-06-15" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });

    expect(screen.getByText(/this time slot is already reserved!/i)).toBeInTheDocument();
  });

  test("calls submit function when form is valid and submitted", () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-06-15" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });
});
