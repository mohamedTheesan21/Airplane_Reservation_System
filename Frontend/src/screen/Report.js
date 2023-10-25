import React, { useState } from "react";
// import { getPassengersByFlight, getPassengersByDestination, getBookingsByPassengerType, getFlightDataByRoute } from "../api/reports";

function Report() {
  const [flightNo, setFlightNo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleFlightNoSubmit = async (e) => {
    // e.preventDefault();
    // const passengers = await getPassengersByFlight(flightNo);
    // console.log("Passengers below 18:", passengers.below18);
    // console.log("Passengers above 18:", passengers.above18);
  };

  const handleDestinationSubmit = async (e) => {
    // e.preventDefault();
    // const passengers = await getPassengersByDestination(startDate, endDate, destination);
    // console.log("Passengers travelling to", destination, ":", passengers);
  };

  const handleBookingsSubmit = async (e) => {
    // e.preventDefault();
    // const bookings = await getBookingsByPassengerType(startDate, endDate);
    // console.log("Bookings by passenger type:", bookings);
  };

  const handleFlightDataSubmit = async (e) => {
    // e.preventDefault();
    // const flightData = await getFlightDataByRoute(origin, destination);
    // console.log("Flight data for", origin, "to", destination, ":", flightData);
  };

  return (
    <div>
      <h1>Reports</h1>
      <div className="bg-info m-5 p-2">
        <div className="m-5">
          <form onSubmit={handleFlightNoSubmit} className="mb-3">
            <div className="form-group">
              <label htmlFor="flightNo">Flight No:</label>
              <input
                type="text"
                className="form-control gray-background"
                id="flightNo"
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Get Passengers by Flight
            </button>
          </form>
        </div>
      </div>
      <div className="bg-info m-5 p-2">
        <div className="m-5">
          <form onSubmit={handleDestinationSubmit} className="mb-3">
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                className="form-control gray-background"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                className="form-control gray-background"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destination:</label>
              <input
                type="text"
                className="form-control gray-background"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Get Passengers by Destination
            </button>
          </form>
        </div>
      </div>

      <div className="bg-info m-5 p-2">
        <div className="m-5">
          <form onSubmit={handleBookingsSubmit} className="mb-3">
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                className="form-control gray-background"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                className="form-control gray-background"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Get Bookings by Passenger Type
            </button>
          </form>
        </div>
      </div>

      <div className="bg-info m-5 p-2">
        <div className="m-5">
          <form onSubmit={handleFlightDataSubmit} className="mb-3">
            <div className="form-group">
              <label htmlFor="origin">Origin:</label>
              <input
                type="text"
                className="form-control gray-background"
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destination:</label>
              <input
                type="text"
                className="form-control gray-background"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Get Flight Data by Route
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Report;
