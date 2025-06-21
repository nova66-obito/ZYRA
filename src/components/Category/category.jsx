import React from "react";
import "./category.css"
export default function Category(val) {
   const {dis} = val
    return (
        <>
            <div className="cate-cover col-center">
                <div className="cat-holder cat-pic center">
                    <div className="cat-left cat-in col-center">
                        {dis.slice(0, 5).map((item,i)=>{
                            return(
                                <>
                                  <div className="c-box c-box-right">
                                      <img src={item.image} alt="" />
                                  </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="cat-right cat-in col-center">
                        {dis.slice(6, 10).map((item,i)=>{
                            return(
                                <>
                                  <div className="c-box c-box-left">
                                      <img src={item.image} alt="" />
                                  </div>
                                </>
                            )
                        })}  
                    </div>
                </div>
                <div className="cat-holder cat-txt col-center">
                    <p className="heading">“Redefining fashion — honoring artisans with fair wages, delivering timeless quality to those who wear it”</p>                     
                    <button className="btn-shop cat-btn">category</button>
                </div>
            </div>
        </>
    )
}