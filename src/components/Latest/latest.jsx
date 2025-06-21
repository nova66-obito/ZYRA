import React from "react";
import "./latest.css";

import { MdMailOutline } from "react-icons/md";
import back from "../../image/bg1.png";
export default function Latest(){
    let arr = [...Array(21).keys()].map(i => i + 1);
    console.log(arr);
    return(
        <>
         <main className="latest col-center">
             {/* design inside */}
             <div className="l-cover pic-back center">
                 {arr.map((items,i)=>{
                    return(
                        <>
                         <div className="lat-box center">
                             <img src={back} alt="" />
                         </div>
                        </>
                    )
                 })}
             </div>
             {/* top */}
             <div className="l-cover t-latest col-center">
                 <h3 className="sub">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
                 {/* sending details */}
                 <div className="l-input col-center">
                    {/* email id */}
                     <form className="put col-center">
                          <div className="put put-icon center">
                            <input type="email" required placeholder="enter your mail address"/>
                            <MdMailOutline className="mail-icon"/>
                          </div>
                          <button className="btn-shop put-btn">Subscribe to Newsletter</button> 
                     </form>
                 </div>
                 <p className="heading">Instantly access the latest fashion trends and exclusive deals on our site. Discover your perfect style in a few clicks!</p>
             </div>
         </main>
        </>
    )
}