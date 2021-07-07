import React from "react"
import { Link } from "gatsby"
import icon1 from "../../assets/images/icons/icon1.png"
import icon2 from "../../assets/images/icons/icon2.png"
import icon3 from "../../assets/images/icons/icon3.png"
import shape2 from "../../assets/images/services/service-shape2.png"

const FeaturedService = () => {
  return (
    <div className="boxes-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-boxes-item">
              <div className="icon">
                <img src={icon1} alt="banner" />
              </div>
              <h3>
                {/* <Link to="/service-details">Group Funding</Link> */}
                Group Funding
              </h3>
              <p>
                Whether it’s raising money for your friend’s wedding or sending
                off a colleague, we give you a simple and responsible way to
                organize effortlessly or participate!
              </p>

              <div className="shape1">
                <img src={shape2} alt="banner" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-boxes-item">
              <div className="icon">
                <img src={icon2} alt="banner" />
              </div>
              <h3>
                {/* <Link to="/service-details"></Link> */}
                Group Savings & Lending
              </h3>
              <p>
                We want to help you meet your goals quicker by leveraging the
                power of your social circles.
              </p>

              <div className="shape1">
                <img src={shape2} alt="banner" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
            <div className="single-boxes-item">
              <div className="icon">
                <img src={icon3} alt="banner" />
              </div>
              <h3>
                {/* <Link to="/service-details">Group Investment</Link> */}
                Group Investment
              </h3>
              <p>
                Use the strength of your social circles to tap into more
                audacious investment opportunities
              </p>

              <div className="shape1">
                <img src={shape2} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedService
