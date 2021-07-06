import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <div>
      <Helmet>
        <title>MyKontribute - The Gateway To Africa's Social Circles</title>
        <meta
          name="description"
          content="MyKontribute - The Gateway To Africa's Social Circles"
        />
        <meta
          name="og:title"
          property="og:title"
          content="MyKontribute - The Gateway To Africa's Social Circles"
        ></meta>
        <meta
          name="twitter:card"
          content="MyKontribute - The Gateway To Africa's Social Circles"
        ></meta>
        <link rel="canonical" href="https://rewy-react.envytheme.com/"></link>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg"
        />
      </Helmet>
    </div>
  )
}

export default SEO
