import React from 'react'
import Head from 'next/head'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Logos9 from '../components/logos9'
import Gallery1 from '../components/gallery1'
import Features171 from '../components/features171'
import Features18 from '../components/features18'
import Features17 from '../components/features17'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer1 from '../components/footer1'

const LandingPage = (props) => {
  return (
    <>
      <div className="landing-page-container">
        <Head>
          <title>Landing-Page - Handmade Attractive Grouse</title>
          <meta
            property="og:title"
            content="Landing-Page - Handmade Attractive Grouse"
          />
        </Head>
        <Navbar4></Navbar4>
        <Hero3
          action1="Get Started"
          content1="Track your carbon footprint and monitor ecosystem health"
          heading1="Empower Yourself to Make a Difference"
        ></Hero3>
        <Logos9></Logos9>
        <Gallery1
          content1="Explore stunning images showcasing the beauty of various ecosystems around the world."
          heading1="Ecosystem Health Monitoring"
        ></Gallery1>
        <Features171
          feature1Title="Track Your Carbon Footprint"
          feature1Slogan="Monitor and reduce your impact on the environment"
          feature1Description="Use our tools to calculate and track your carbon footprint over time, and receive personalized tips on how to reduce it."
        ></Features171>
        <Features18></Features18>
        <Features17></Features17>
        <CTA1
          content1="Use our carbon footprint calculator to measure your environmental impact and learn how to reduce it."
          heading1="Track Your Impact"
        ></CTA1>
        <FAQ1
          heading1="FAQs"
          faq1Answer="A carbon footprint is the total amount of greenhouse gases produced directly and indirectly to support human activities, usually expressed in equivalent tons of carbon dioxide (CO2)."
          faq1Question="What is a carbon footprint?"
        ></FAQ1>
        <Contact4></Contact4>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .landing-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default LandingPage
