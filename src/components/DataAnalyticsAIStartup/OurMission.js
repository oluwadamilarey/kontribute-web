import React from "react"
import { Link } from "gatsby"
import starIcon from "../../assets/images/star-icon.png"
import shape1 from "../../assets/images/our-mission/our-mission-shape1.png"
import shape2 from "../../assets/images/our-mission/our-mission-shape2.png"
import mission1 from "../../assets/images/our-mission/our-mission1.png"

const OurMission = () => {
  return (
    <section className="our-mission-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="our-mission-content">
              <div className="content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" /> Our Mission
                </span>
                <h2>Our Mission Is To</h2>
                <ul className="our-missionlist" style={{ textAlign: "left" }}>
                  <li>
                    <p>
                      Create seamless payment experiences among closed knit
                      social groups
                    </p>
                  </li>
                  <li>
                    <p>
                      Help individuals within their social circles to leverage
                      strength in numbers to unlock more opportunities for
                      Wealth Creation and better standards of living
                    </p>
                  </li>
                  <li>
                    <p>
                      Capture and leverage the mundane everyday payments to
                      unlock more access to Financial services for our Community
                      of users.
                    </p>
                  </li>
                  <li>
                    <p>Support your financial goals</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="our-mission-image">
              <img src={mission1} alt="banner" />
              <div className="shape">
                <img src={shape1} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission
