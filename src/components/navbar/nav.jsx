import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./nav.css"
export default function Nav() {
    const [off, setOff] = useState(false);
    const [see, setSee] = useState(false);
    const clk = () => {
        if (window.confirm("Are you sure you want to close")) {
            setOff(!off)
        }

    }
    const link = [{show : 'Shop',line : '/'}, {show : 'On Sale'  ,line : "onshop"}, {show : 'New Arrivals' ,line:""}, {show : 'Brands',line:""},{show:'search',line:""}]
    return (
        <>
            <header>
                {/* sign-in link */}
                <div className={`sign_in stay center  position-relative ${off ? 'act' : null}`}>
                    <h6>Sign up and get 20% off to your first order. <Link to="login" className="click">Sign Up Now</Link></h6>
                    <IoMdClose className="s_icon icon" onClick={clk} />
                </div>
                {/* navbar */}
                <nav className="nav-overall stay full center">
                    {/* nav-right */}
                    <div className="nav-left nav-box center">
                        <div className="n-logo nav-con center">
                            <h3>Sew IN Style</h3>
                        </div>
                        <div className={`n-link nav-con center ${see ? 'active' : null}`}>
                            {link.map((val,i) => {
                                return (
                                    <Link to={val.line} className={`click clk${i}`} >{val.show}</Link>
                                )
                            })}
                            <div className="nav-right sm-view nav-box center">
                                <div className="nav-icons nav-con center">
                                    <h4 className="center gap-3"><FaShoppingCart className="c-icon icon" /></h4>
                                    <h4 className="center gap-3"><FaHeart className="c-icon icon" /></h4>
                                    <h4 className="center gap-3"><IoPersonCircleOutline className="c-icon icon" /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*nav left */}
                    <div className="nav-right nav-box center gap-2">
                        <div className="nav-sec nav-con center position-relative">
                            <input type="search" placeholder="search" />
                            <IoSearch className="icon s-icon" />
                        </div>
                        <div className="nav-icons nav-con center">
                            <h4 className="center gap-3"><FaShoppingCart className="c-icon icon"/></h4>
                            <h4 className="center gap-3"><FaHeart className="c-icon icon" /></h4>
                            <h4 className="center gap-3"><IoPersonCircleOutline className="c-icon icon" /></h4>
                        </div>
                    </div>
                    <div className="sm-bar" onClick={() => setSee(!see)}>
                        <h5>{see ?<IoMdClose className="b-icon icon" /> : <FaBarsStaggered className="b-icon icon" /> }</h5>
                    </div>
                </nav>
            </header>
        </>
    )
}