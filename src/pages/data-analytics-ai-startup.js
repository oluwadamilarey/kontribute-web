import React from "react"
//import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import MainBanner from "../components/DataAnalyticsAIStartup/MainBanner"
import FeaturedService from "../components/DataAnalyticsAIStartup/FeaturedService"
import AboutUs from "../components/DataAnalyticsAIStartup/AboutUs"
import OurMission from "../components/DataAnalyticsAIStartup/OurMission"
import Funfacts from "../components/DataAnalyticsAIStartup/Funfacts"
import OurServices from "../components/DataAnalyticsAIStartup/OurServices"
import HowItWork from "../components/DataAnalyticsAIStartup/HowItWork"
//import TeamMembers from "../components/DataAnalyticsAIStartup/TeamMembers"
import Testimonials from "../components/DataAnalyticsAIStartup/Testimonials"
import Partner from "../components/DataAnalyticsAIStartup/Partner"
import StartProject from "../components/DataAnalyticsAIStartup/StartProject"
import OurBlog from "../components/DataAnalyticsAIStartup/BlogPost"
import TeamMember from "../components/Index/TeamMember"
import OurHistoryContentOne from "../components/History/OurHistoryContentOne"
import { useRecoilState } from "recoil"
import { collapsedState } from "../utils/recoil-atoms"
import Navbar from "../components/App/NavbarFour"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logo from "../assets/images/kontribute.svg"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <FeaturedService />
      <section id="about">
        <AboutUs />
      </section>
      <section id="mission">
        <OurMission />
      </section>
      {/* <Funfacts /> */}
      {/* <OurServices /> */}
      <section id="ourHistory">
        <OurHistoryContentOne />
      </section>
      <HowItWork />
      <TeamMember />
      {/* <Testimonials /> */}
      {/* <Partner /> */}
      {/* <StartProject /> */}
      {/* <OurBlog /> */}
      <Footer />
    </Layout>
  )
}

export default Home
