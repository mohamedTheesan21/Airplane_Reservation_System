import React, { useState } from 'react';

const HomeScreen = () => {
  // State to manage input values
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // State to store search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform flight search logic here
    // You can make API calls to retrieve flight data
    // For this example, let's assume we have a predefined list of flights

    const flights = [
      { origin: 'CGK', destination: 'BKK', flightNumber: 'BA101' },
      { origin: 'BIA', destination: 'DEL', flightNumber: 'BA202' },
      // Add more flight data here
    ];

    const filteredFlights = flights.filter(
      (flight) => flight.origin === origin && flight.destination === destination
    );

    setSearchResults(filteredFlights);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="container-fluid w-75">
          <h1 className='headingFlight'>Find a Flight</h1>
          <form id="flight-search-form">
            <div className="row allrow">
              <div className="col-md-4">
                <div className="form-groupHome">
                  <label className="p-2" for="departure">
                    From:{" "}
                  </label>
                  <select
                    className="gray-background"
                    id="departure"
                    name="departure"
                    required
                  >
                    <option value="CGK">CGK(Indonesia)</option>
                    <option value="DPS">DPS(Indonesia)</option>
                    <option value="BIA">BIA(Sri Lanka)</option>
                    <option value="HRI">HRI(Sri Lanka)</option>
                    <option value="DEL">DEL(India)</option>
                    <option value="BOM">BOM(India)</option>
                    <option value="MAA">MAA(India)</option>
                    <option value="BKK">BKK(Thailand)</option>
                    <option value="DMK">DMK(Thailand)</option>
                    <option value="SIN">SIN(Singapore)</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-groupHome">
                  <label className="p-2" for="destination">
                    To:{" "}
                  </label>
                  <select
                    className="gray-background"
                    id="destination"
                    name="destination"
                    required
                  >
                    <option value="CGK">CGK(Indonesia)</option>
                    <option value="DPS">DPS(Indonesia)</option>
                    <option value="BIA">BIA(Sri Lanka)</option>
                    <option value="HRI">HRI(Sri Lanka)</option>
                    <option value="DEL">DEL(India)</option>
                    <option value="BOM">BOM(India)</option>
                    <option value="MAA">MAA(India)</option>
                    <option value="BKK">BKK(Thailand)</option>
                    <option value="DMK">DMK(Thailand)</option>
                    <option value="SIN">SIN(Singapore)</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-groupHome">
                  <label className="p-2" for="departure-date">
                    When
                  </label>
                  <input
                    className="gray-background"
                    type="date"
                    id="departure-date"
                    name="departure-date"
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg submitBtn">
              Let's go!
            </button>
          </form>
        </div>
      </div>
      <div className="row next-line">
        <h2 className='availableFlight'>Available Flights</h2>
        <ul id="flight-results">
          {/* Flight search results will be displayed here */}
        </ul>
      </div>
    </div>
  );
};

export default HomeScreen;
