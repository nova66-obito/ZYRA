import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
export default function Footer() {
  const arr = [
    { title: "company", cell: ["about", "features", "works", "carrers"] },
    { title: "help", cell: ["customer supports", "delivery details", "terms & conditions", "carrers"] },
    { title: "FAQ", cell: ["account", "manage deliveries", "orders", "payments"] },
    { title: "resources", cell: ["Free eBooks", "development tutorial", "How to - Blog", "youtube playlist"] }
  ]
  return (
    <>
      <footer className="center">
        <div className="f-left">
          <h3>ZYRA</h3>
          <p className="heading">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="f-soc center">
            <p><FaFacebookF className="f-cion" /></p>
            <p><IoLogoTwitter className="f-cion" /></p>
            <p><IoLogoInstagram className="f-cion" /></p>
            <p><IoLogoGithub className="f-cion" /></p>
          </div>
        </div>
        <div className="f-right center">
          {arr.map((items, i) => {
            return (
              <>
                <div className="f-link col-center">
                  <h5>{items.title}</h5>
                  <div className="f-a-link col-center">
                      {items.cell.map(
                    (cell, i) => {
                      return (
                        <>
                          <a className="sub" href="#">{cell}</a>
                        </>
                      )
                    }
                  )}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </footer>
    </>
  )
}