import React from "react"
import { Link } from "gatsby"
import starIcon from "../../assets/images/star-icon.png"
import princess from "../../assets/images/team/princess.jpg"
import david from "../../assets/images/team/david.jpg"
import ikire from "../../assets/images/team/ikire.jpg"
import ada from "../../assets/images/team/ada_new.jpg"

const TeamMember = () => {
  return (
    <section className="scientist-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="team" />
            Team Members
          </span>
          <h2>Our Awesome Team</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={ada} alt="team" style={{ height: 276, width: 313 }} />

                <ul className="social">
                  {/* <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="http://linkedin.com/in/adaobiokerekeocha"
                      target="_blank"
                    >
                      <Link
                        //to="http://linkedin.com/in/adaobiokerekeocha"
                        className="d-block"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h3>Adaobi Igwe-Okerekeocha</h3>
                <span>COO/CPO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img
                  src={david}
                  alt="team"
                  style={{ height: 276, width: 313 }}
                />

                <ul className="social">
                  {/* <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-linkedin"></i>
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/david-abimbola-98b53a188/"
                      target="_blank"
                    >
                      <Link
                        //to="http://linkedin.com/in/adaobiokerekeocha"
                        className="d-block"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h3>David Abimbola</h3>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img
                  src={ikire}
                  alt="team"
                  style={{ height: 276, width: 313 }}
                />

                <ul className="social">
                  {/* <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ikeri-ebenezer-384059b1/"
                      target="_blank"
                    >
                      <Link
                        //to="http://linkedin.com/in/adaobiokerekeocha"
                        className="d-block"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h3>Ikeri Ebenezer</h3>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img
                  src={princess}
                  alt="team"
                  style={{ height: 276, width: 313 }}
                />

                <ul className="social">
                  {/* <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/princessedoosagie/"
                      target="_blank"
                    >
                      <Link
                        //to="http://linkedin.com/in/adaobiokerekeocha"
                        className="d-block"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h3>Princess Edo-Osagie</h3>
                <span>CIO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMember
