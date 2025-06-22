import React from "react";
import "./signin.css";
import Goo from "../../image/g-icon.png"
import Bg from "../../image/lbgr.png"
import { Link } from "react-router-dom";
export default function Signin(){
    return (
        <>
            <main>
                <div className="log-cover col-center">
                    <div className="log-name">
                       <h1>ZYRA</h1>
                    </div>
                    {/* overall */}
                    <div className=" sign-body center">
                        <div className="log-bg">
                            <img src={Bg} alt="background" />
                        </div>
                        {/* form data collection */}
                        <form  action="" className="col-center signin-form login-form">
                           <div className="form-data w-100">
                              <div className="f-put">
                                   <label htmlFor="name">name</label>
                                   <input type="text" placeholder="enter your name...!"/>
                               </div>
                               <div className="f-put">
                                   <label htmlFor="phone">phone no</label>
                                   <input type="email" placeholder="enter your phone no...!"/>
                               </div>
                               <div className="f-put">
                                   <label htmlFor="email">email</label>
                                   <input type="email" placeholder="enter your email...!"/>
                               </div>
                                <div className="f-put">
                                    <label htmlFor="password">password</label>
                                    <input type="password" placeholder="enter your password...!"/>
                               </div>
                                 <div className="f-put">
                                    <label htmlFor="conform">coformation</label>
                                    <input type="password" placeholder="enter your password...!"/>
                               </div>

                               <button className="btn-shop log-btn">sign-up</button>
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
                                  <p>Are you know? <Link to="/login">if you have account</Link></p>
                              </div>
                           </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
}