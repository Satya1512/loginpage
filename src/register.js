import React from "react";
import registerimg from "./images/regimg.jpg";
function register() {
    return (
        <div className="conatiner">
            <div className='login'>
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-4">
                        <h1>Sign Up</h1>
                        <div class="mb-3">
                            <div class="form-floating">
                                <input type="password" class="form-control" placeholder="Password" />
                                <label>Your Name</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-floating">
                                <input type="password" class="form-control" placeholder="Password" />
                                <label>Your Email</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-floating">
                                <input type="password" class="form-control" placeholder="Password" />
                                <label>password</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-floating">
                                <input type="password" class="form-control" placeholder="Password" />
                                <label>Re-Enter your password</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" />
                                <label class="form-check-label">I agree all statements in<span className="regtext"> Terms and conditions</span></label>
                            </div>
                        </div>
                        <button className="btn btn-info login-size">REGISTER</button>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-6">
                        <div class="register-img">
                            <img src={registerimg} alt="logo" height="500px" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default register;