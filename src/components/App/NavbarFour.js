import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../assets/images/kontribute.svg"
import Scroll from "react-scroll"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ScrollLink = Scroll.ScrollLink

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    collapsed
      ? (elementId.style.backgroundColor = "transparent")
      : (elementId.style.backgroundColor = "white")

    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  })

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="tarn-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={logo} alt="logo" />
                <p style={{ fontSize: 23, marginLeft: 10 }}>Kontribute</p>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <div onClick={() => setCollapsed(true)}>
                      <AnchorLink
                        to="/#about"
                        //activeClassName="active"
                        //onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        About Us
                      </AnchorLink>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div onClick={() => setCollapsed(true)}>
                      <AnchorLink
                        to="/#mission"
                        //activeClassName="active"
                        //onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        Mission
                      </AnchorLink>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div onClick={() => setCollapsed(true)}>
                      <AnchorLink
                        to="/#ourHistory"
                        //activeClassName="active"
                        //onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        History
                      </AnchorLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div onClick={() => setCollapsed(true)}>
                      <AnchorLink
                        to="/#howItWorks"
                        //activeClassName="active"
                        //onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        How It Works
                      </AnchorLink>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      activeClassName="active"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Products <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          //to="/case-studies"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          My Loop
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <div onClick={() => setCollapsed(true)}>
                      <AnchorLink
                        to="/#team"
                        //activeClassName="active"
                        //onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        The Team
                      </AnchorLink>
                    </div>
                  </li>
                </ul>

                {/* <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <form className="search-box">
                      <input
                        type="text"
                        className="input-search"
                        placeholder="Search for anything"
                      />
                      <button type="submit">
                        <i className="flaticon-loupe"></i>
                      </button>
                    </form>
                  </div>

                  <div className="option-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="default-btn"
                    >
                      <i className="flaticon-right"></i> Get Started{" "}
                      <span></span>
                    </Link>
                  </div>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
