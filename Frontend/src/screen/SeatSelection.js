import React from "react";
import Navbar from "../component/Navbar";

function SeatSelection() {
  return (
    <div>
      <Navbar />
      <div class="allTable row justify-content-center ">
        <div class="col-lg-4 col-md-2">
          <h2 className="seatHeading">Airbus A380</h2>
          <table class="seatTable table table-bordered">
            <thead>
              <tr>
                <th>Class</th>
                <th>Total</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Platinum</th>
                <th>12</th>
                <th></th>
              </tr>
              <tr>
                <th>Business</th>
                <th>88</th>
                <th></th>
              </tr>
              <tr>
                <th>Economy</th>
                <th>420</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-4 col-md-2">
          <h2 className="seatHeading">Boeing 737</h2>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Class</th>
                <th>Total</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Platinum</th>
                <th>8</th>
                <th></th>
              </tr>
              <tr>
                <th>Business</th>
                <th>28</th>
                <th></th>
              </tr>
              <tr>
                <th>Economy</th>
                <th>90</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-4 col-md-2">
          <h2 className="seatHeading">Boeing 757</h2>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Class</th>
                <th>Total</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Platinum</th>
                <th>10</th>
                <th></th>
              </tr>
              <tr>
                <th>Business</th>
                <th>40</th>
                <th></th>
              </tr>
              <tr>
                <th>Economy</th>
                <th>150</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;
