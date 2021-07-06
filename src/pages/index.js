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
import ComingSoon from "./coming-soon"

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
      <section id="howItWorks">
        <HowItWork />
      </section>
      <section id="team">
        <TeamMember />
      </section>
      <ComingSoon />
      {/* <Testimonials /> */}
      {/* <Partner /> */}
      {/* <StartProject /> */}
      {/* <OurBlog /> */}
      <Footer />
    </Layout>
  )
}

export default Home

// import React from "react"
// import Navbar from "../components/App/Navbar"
// import Footer from "../components/App/Footer"
// import Layout from "../components/App/Layout"
// import Banner from "../components/Index/Banner"
// import OurSolutions from "../components/Index/OurSolutions"
// import OurServices from "../components/Index/OurServices"
// import OurFeatures from "../components/Index/OurFeatures"
// import TeamMember from "../components/Index/TeamMember"
// import RecentProjects from "../components/Index/RecentProjects"
// import Pricing from "../components/Index/Pricing"
// import Testimonials from "../components/Index/Testimonials"
// import Partner from "../components/Index/Partner"
// import ProjectStartArea from "../components/Index/ProjectStartArea"
// import OurBlog from "../components/Index/OurBlog"
// import

// const Home = () => {
//   return (
//     <Layout>
//       <Navbar />
//       <Banner />
//       <OurSolutions />
//       <OurServices />
//       <OurFeatures />
//       <TeamMember />
//       <RecentProjects />
//       <Pricing />
//       <Testimonials />
//       <Partner />
//       <OurBlog />
//       <ProjectStartArea />
//       <Footer />
//     </Layout>
//   )
// }

// export default Home
