import React from "react";

function Register() {
    return (
        <section id="regAll">
            <div>
                <h1>Your Information</h1>
                <p>Become a member and enjoy exclusive promotions and endless opportunities to earn miles both in flight and on the ground doing everyday things. You can use your miles for flights to nearly 1,000 destinations worldwide, upgrades, vacations, car rentals, hotel stays and more.</p>
            </div>
            
            <div className="information"> 
                <div className="subInfo"><h3>Your Name</h3>
                    <div className="row g-3">
                        <div className="col">
                            <label className="nameInfo">First name</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="col">
                            <label className="nameInfo">Last name</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col">
                            <label className="nameInfo">Date of birth</label>
                            <input type="date" className="form-control" required/>
                        </div>
                        <div className="col">
                            <label className="nameInfo">Gender</label>
                            <label className="visually-hidden" htmlFor="specificSizeSelect">Preference</label>
                            <select className="form-select" id="specificSizeSelect" required>
                                <option selected>Select Your gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="subInfo"><h3>Address</h3>
                    <div className="row g-3">
                        <div className="col">
                            <label className="nameInfo">Country</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="col">
                            <label className="nameInfo">City</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col">
                            <label className="nameInfo">address line 1</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col">
                            <label className="nameInfo">address line 2</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                
                <div className="subInfo"><h3>Email and Phone</h3>
                    <div className="row g-3">
                        <div className="col">
                            <label className="nameInfo">Email</label>
                            <input type="email" className="form-control" required/>
                        </div>
                        <div className="col">
                            <label className="nameInfo">Confirm Email</label>
                            <input type="email" className="form-control" required/>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-6">
                            <label className="nameInfo">Phone</label>
                            <input type="number" className="form-control"required />
                        </div>
                    </div>
                </div>

                <div className="subInfo"><h3>Your account</h3>
                    <div className="row g-3">
                        <div className="col">
                            <label className="nameInfo">Passport ID</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="col">
                            <label className="nameInfo">Username</label>
                            <input type="text" className="form-control"  required/>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col">
                            <label className="nameInfo">Password</label>
                            <input type="password" className="form-control"required/>
                        </div>
                        <div className="col">
                            <label className="nameInfo">Confirm Password</label>
                            <input type="password" className="form-control"required/>
                        </div>
                    </div>
                </div>

                <div className="subInfo">
                    <div className="row g-3">
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                            <label class="form-check-label" for="exampleCheck1">I have read and accepted B airline Terms and Condition</label>
                        </div>
                        <div className="col">
                            <button type="button" class="btn btn-dark btn-lg submitBtn">Submit</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
}

export default Register;
