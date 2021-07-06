import React from "react"
import { Link } from "gatsby"
import img10 from "../../assets/images/about/about-img10.png"
import shape1 from "../../assets/images/about/about-shape1.png"
import shape2 from "../../assets/images/our-mission/our-mission-shape2.png"
import starIcon from "../../assets/images/star-icon.png"

const AboutUs = () => {
  return (
    <div className="about-area pb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img">
              <img src={img10} alt="banner" />
              <div className="shape">
                <img src={shape1} alt="banner" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" />
                  About Us
                </span>
                <h2>
                  We are all about connecting Africa’s circles and we do this
                  putting an App in your hand that
                </h2>

                <ul
                  className="aboutlist"
                  style={{ textAlign: "left", fontSize: 27 }}
                >
                  <li>
                    <p>Takes away the hassles around your outflows.</p>
                  </li>
                  <li>
                    <p>
                      Provides insight and recommendations on your spending,
                      savings and investment patterns
                    </p>
                  </li>
                  <li>
                    <p>
                      Delivers digital services to you from an array of Partner
                      providers in the ecosystem
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
