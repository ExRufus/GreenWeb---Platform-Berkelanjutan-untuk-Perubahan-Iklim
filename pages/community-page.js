import React from 'react'
import Head from 'next/head'

import Navbar4 from '../components/navbar4'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer1 from '../components/footer1'
import Navbar45 from '../components/navbar45'

const CommunityPage = (props) => {
  return (
    <>
      <div className="community-page-container">
        <Head>
          <title>Community-Page - Handmade Attractive Grouse</title>
          <meta
            property="og:title"
            content="Community-Page - Handmade Attractive Grouse"
          />
        </Head>
        <Navbar45></Navbar45>
        <Hero17></Hero17>
        <Features24></Features24>
        <CTA26></CTA26>
        <Features25></Features25>
        <Testimonial17></Testimonial17>
        <Contact10></Contact10>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .community-page-container {
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

export default CommunityPage
