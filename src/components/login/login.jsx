import React from "react";
import "./login.css";
import Goo from "../../image/g-icon.png"
import Bg from "../../image/lbgr.png"
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <>
            <main>
                <div className="log-cover col-center">
                    <div className="log-name">
                       <h1>ZYRA</h1>
                    </div>
                    {/* overall */}
                    <div className="logo-body center">
                        <div className="log-bg">
                            <img src={Bg} alt="background" />
                        </div>
                        {/* form data collection */}
                        <form action="" className="col-center login-form">
                           <div className="form-data w-100">
                               <div className="f-put">
                                   <label htmlFor="email">email</label>
                                   <input type="email" placeholder="enter your email...!"/>
                               </div>
                               <div className="f-put">
                                    <label htmlFor="password">password</label>
                                    <input type="password" placeholder="enter your password...!"/>
                                    <a href="#">forgot password ?</a>
                               </div>
                               <button className="btn-shop log-btn">login</button>
                           </div>
                           {/* orline */}
                           <div className="log-or center">
                              <div className="o-line"></div>
                               <p>or</p>
                              <div className="o-line"></div>
                           </div>
                           {/* login other */}
                           <div className="log-bot col-center">
                              <div className="g-log center">
                                  <img src={Goo} alt="google" />
                                  <a href="#">sign in with google</a>
                              </div>
                              <div>
                                  <p>Are you new? <Link to="/signup">Create an Account</Link></p>
                              </div>
                           </div>

                        </form>
                    </div>

                </div>
            </main>
        </>
    )
}