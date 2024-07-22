import React from 'react'
import Head from 'next/head'

import Navbar44 from '../components/navbar44'
import Footer11 from '../components/footer11'

const ActivityPage = (props) => {
  return (
    <>
      <div className="activity-page-container">
        <Head>
          <title>Activity-Page - Handmade Attractive Grouse</title>
          <meta
            property="og:title"
            content="Activity-Page - Handmade Attractive Grouse"
          />
        </Head>
        <Navbar44></Navbar44>
        <img alt="pastedImage" src="/external/pastedimage-b416h-200h.png" />
        <img alt="pastedImage" src="/external/pastedimage-iywd-1500w.png" />
        <Footer11></Footer11>
      </div>
      <style jsx>
        {`
          .activity-page-container {
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

export default ActivityPage
