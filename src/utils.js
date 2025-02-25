export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// Simulate fetching available times from an API
export const fetchData = (date) => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return availableTimes;
  };
  
  // Simulate submitting reservation
  export const submitAPI = (formData) => {
    console.log("Reservation submitted:", formData);
    return true; // Simulate successful response
  };
  