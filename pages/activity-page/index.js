import React from 'react'
import Head from 'next/head'

import Footer11 from '../../components/footer11'
import Navbar45 from '../../components/navbar45'
import Link from 'next/link'

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
        <Navbar45></Navbar45>
        <img alt="pastedImage" src="/external/pastedimage-b416h-200h.png" />
        <Link href={"/activity-page/1"}><img alt="pastedImage" src="/external/pastedimage-iywd-1500w.png" /></Link>
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
