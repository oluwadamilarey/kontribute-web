import React from "react"
import { Link } from "gatsby"
import starIcon from "../../assets/images/star-icon.png"
import team1 from "../../assets/images/team/team1.jpg"
import team2 from "../../assets/images/team/team2.jpg"
import team3 from "../../assets/images/team/team4.jpg"
import team4 from "../../assets/images/team/team4.jpg"

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
                <img src={team1} alt="team" />

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
                <h3>Adaobi Okerekeocha</h3>
                <span>COO/CPO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team2} alt="team" />

                <ul className="social">
                  <li>
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
                <img src={team3} alt="team" />

                <ul className="social">
                  <li>
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
                <img src={team4} alt="team" />

                <ul className="social">
                  <li>
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
