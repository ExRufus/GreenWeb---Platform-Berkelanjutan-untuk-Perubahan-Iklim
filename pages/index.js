import React from 'react'
import Head from 'next/head'

import Navbar45 from '../components/navbar45'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Contact3 from '../components/contact3'
import Footer1 from '../components/footer1'

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard-container">
        <Head>
          <title>Handmade Attractive Grouse</title>
          <meta property="og:title" content="Handmade Attractive Grouse" />
        </Head>
        <Navbar45></Navbar45>
        <Hero9></Hero9>
        <Features1></Features1>
        <Contact3></Contact3>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .dashboard-container {
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

export default Dashboard
