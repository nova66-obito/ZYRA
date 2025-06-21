import React, { useEffect, useState } from "react";
import '../css/main.css';
import '../css/main-sm.css';
import pic1 from "../image/img1.png"
import pic2 from "../image/img2.png"
import pic3 from "../image/img3.png"
import pic4 from "../image/img4.png"
import pic5 from "../image/img5.png"
import pic6 from "../image/img6.png"
import pic7 from "../image/img7.png"
import pic8 from "../image/img8.png"
import pic9 from "../image/img9.png"
import pic10 from "../image/img10.png"
import pic11 from "../image/img11.png"
import pic12 from "../image/img12.png"
import pic13 from "../image/img13.png"
// collection
import col1 from "../image/col1.png";
import col2 from "../image/col2.png";
import col3 from "../image/col3.png";
import col4 from "../image/col4.png";
import col5 from "../image/col5.png";
// icon vector
import logo1 from "../image/logo.png";
import logo2 from "../image/logo2.png";
import logo3 from "../image/logo3.png";
import logo4 from "../image/logo4.png";
import logo5 from "../image/logo5.png";
// review box
import Review from "../components/Reviews/Review";
import Coreview from "../components/cosReviews/cosreview";
import { Link } from 'react-router-dom';
import Category from "../components/Category/category";
import Latest from "../components/Latest/latest";
export default function Home() {
    const [act, setAct] = useState(0);
    const box = [
        { id: 1, image: pic1 },
        { id: 2, image: pic2 },
        { id: 3, image: pic3 },
        { id: 4, image: pic4 },
        { id: 5, image: pic5 },
        { id: 6, image: pic6 },
        { id: 7, image: pic7 },
        { id: 8, image: pic8 },
        { id: 9, image: pic9 },
        { id: 10, image: pic10 },
        { id: 11, image: pic11 },
        { id: 12, image: pic12 },
        { id: 13, image: pic13 },
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setAct((prevIndex) => (prevIndex + 1) % box.length);
        }, 2000)
        console.log(setAct)
        return () => clearInterval(timer)
    }, [box.length]);
    // ----------------------------------------------------------------
    const run = [
        { logo: logo1, name: "none" },
        { logo: logo2, name: "none" },
        { logo: logo3, name: "none" },
        { logo: logo4, name: "none" },
        { logo: logo5, name: "none" },
        { logo: logo1, name: "none" },
        { logo: logo2, name: "none" },
        { logo: logo3, name: "none" },
        { logo: logo4, name: "none" },
        { logo: logo5, name: "none" },
        { logo: logo1, name: "none" },
        { logo: logo2, name: "none" },
        { logo: logo3, name: "none" },
        { logo: logo4, name: "none" },
        { logo: logo5, name: "none" },
    ];
    const collect = [
        { pics: col2, nam: "Casual Wear" },
        { pics: col3, nam: "Ethnic Wear" },
        { pics: col4, nam: "Party Wear" },
        { pics: col5, nam: "Sports Wear" },
    ];
    const show = [
        { no: '200+', stxt: "International Brands" },
        { no: '2,000+', stxt: "High-Quality Products" },
        { no: '30,000+', stxt: "Happy Customers" }
    ];

    return (
        <>
            <main>
                <section className="full">
                    {/* top page */}
                    <div className="home col-center" >
                        <div className="h-con h-box col-center">
                            <h1 className="head">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p className="sub text-center">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        </div>
                        <div className="h-pic h-box center ">
                            {box.map((val, i) => {
                                return (
                                    <>
                                        <div className={`h-p-box ${i === act ? 'active' : null}`} key={val.id}>
                                            <img src={val.image} alt="section" />
                                            <div className="h-p-txt center" >
                                                <h4>back & white</h4>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="h-btn">
                            <button className="btn-shop">shop now</button>
                        </div>
                        <div className="run-txt center gap-5">
                            {run.map((item, i) => {
                                return (
                                    <>
                                        <div className="r-vec ceter">
                                            <img src={item.logo} alt={item.name} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    {/* ---------------------------------------------------------- */}
                    <div className="collection col-center">
                        <h1 className="heading">Summer Collection</h1>
                        <div className="col-card center">
                            <div className="col-left col-cover col-center ">
                                <div className="col-big col-center">
                                    <div className="col-b-img center">
                                        <img src={col1} alt="Elevate Your Style" />
                                    </div>
                                    <div className="col-b-txt center">
                                        <h2 className="heading">Elevate Your Style</h2>
                                    </div>
                                    <div className="col-b-show center gap-3">
                                        {show.map((vals, i) => {
                                            return (
                                                <>
                                                    <div className={`s-dis ${vals.stxt}`}>
                                                        <h3 className="heading">{vals.no}</h3>
                                                        <small className="heading">{vals.stxt}</small>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-right col-cover center">
                                {collect.map((items, i) => {
                                    return (
                                        <>
                                            <div className="col-min col-center">
                                                <img src={items.pics} alt={items.nam} />
                                                <h5 className="heading ">{items.nam}</h5>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* featured-col */}
                    <div className="featured full col-center">
                        <h1 className="heading">Featured Collection</h1>
                        {/* pic collection show */}
                        <Review images={box} />
                        {/* customer review review */}
                        <Coreview />
                    </div>
                    {/* category */}
                    <div className="category col-center">
                        <h1 className="heading">Shop by Category</h1>
                        <Category dis={box} />
                    </div>
                    {/* latest */}
                    <Latest />
                </section>
            </main>
        </>
    )
}