import Login from "./screen/Login";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import Footer from "./component/Footer";
import Register from "./screen/Register";
import React, { useEffect, useState } from "react";
import Booking from "./screen/Booking";
import SeatSelection from "./screen/SeatSelection";

const userIsGuess = false;

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<HomeScreen />}></Route>
          <Route
            path="/register"
            element={<Register isGuess={userIsGuess} />}
          ></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/seatselection" element={<SeatSelection />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
