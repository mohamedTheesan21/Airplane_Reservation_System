import React from "react";

function Footer(){
    return(
        <div class="py-5">
        <footer >
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-2">
                <h5>Company</h5>
                <ul class="nav flex-column">
                    <li class="nav-item"> About</li>
                    <li class="nav-item">Booking</li>
                    <li class="nav-item">Contact</li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-2">
                <h5>Legal</h5>
                <ul class="nav flex-column">
                    <li class="nav-item">Terms & Condition</li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-2">
                <h5>About Us</h5>
                <ul class="nav flex-column">
                    <li class="nav-item">We are B Airways a subsidiary Of Virgin Airlines. Some people just know how to fly.</li>
                </ul>
            </div>
        </div>
    </footer>
</div>


    )
}
export default Footer;