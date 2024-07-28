import React from 'react'
import Head from 'next/head'

import Navbar45 from '../../components/navbar45'
import Footer12 from '../../components/footer12'

const ActivityDetailPage = (props) => {
  return (
    <>
      <div className="activity-detail-page-container">
        <Head>
          <title>Activity-Detail-Page - Handmade Attractive Grouse</title>
          <meta
            property="og:title"
            content="Activity-Detail-Page - Handmade Attractive Grouse"
          />
        </Head>
        <Navbar45></Navbar45>
        <img
          alt="pastedImage"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8cea475b-8c05-43e0-992d-1c087b2ae448/7e03c7d4-d5bb-4c1b-9f47-653369972fe0?org_if_sml=1455973&amp;force_format=original"
        />
        <img
          alt="pastedImage"
          src="/external/pastedimage-i8yi-600h.png"
          className="activity-detail-page-pasted-image1"
        />
        <Footer12></Footer12>
      </div>
      <style jsx>
        {`
          .activity-detail-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .activity-detail-page-pasted-image1 {
              width: 1016px;
              height: 553px;
              margin-top: 24px;
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ActivityDetailPage
