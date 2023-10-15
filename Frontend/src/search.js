import React, { useState } from 'react';

const FlightSearchPage = () => {
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
    <div class="background d-flex justify-content-center align-items-center vh-100 Search">
      <div class="container">
        <h1 className='heading'>Find a Flight</h1>
        <form id="flight-search-form">
          <div class="form-group">
            <label for="departure">Where are you leaving from?</label>
            <select id="departure" name="departure" required>
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

          <div class="form-group">
            <label for="destination">Where are you headed?</label>
            <select id="destination" name="destination" required>
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

          <div class="form-group">
            <label for="departure-date">When do you want to leave?</label>
            <input
              type="date"
              id="departure-date"
              name="departure-date"
              required
            />
          </div>

          <button type="submit" class=" btn btn-dark btn-lg">
            Let's go!
          </button>
        </form>

        <section>
          <h2 className='flighHeading'>Available Flights</h2>
          <ul id="flight-results">
            {/* Flight search results will be displayed here */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FlightSearchPage;
