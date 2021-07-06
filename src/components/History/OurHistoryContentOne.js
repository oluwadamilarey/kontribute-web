import React from "react"
import starIcon from "../../assets/images/star-icon.png"
import history1 from "../../assets/images/history/history1.jpg"
import history2 from "../../assets/images/history/history2.jpg"
import history3 from "../../assets/images/history/history3.jpg"
import history4 from "../../assets/images/history/history4.jpg"

const OurHistoryContentOne = () => {
  return (
    <section className="history-area ptb-100 bg-fafafb">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="about" />
            Our History
          </span>
          <h2>History Begins in 2019</h2>
        </div>

        <ol className="timeline history-timeline">
          <li className="timeline-block">
            <div className="timeline-date">
              Somewhere In
              <span>2019</span>
            </div>
            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>
            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Conversations</h3>
                    <p>
                      Conversations and potential consumer research began in
                      2019
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <img src={history1} alt="about" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-date">
              March 13
              <sup>th</sup>
              <span>2020</span>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Registration</h3>
                    <p>
                      Offically registered Kontribute as a company on the 13th
                      March 2020 RC-1667695
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <img src={history2} alt="about" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default OurHistoryContentOne
