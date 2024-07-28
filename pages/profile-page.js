import React from 'react'
import Head from 'next/head'

import Navbar4 from '../components/navbar4'
import Navbar45 from '../components/navbar45'

const ProfilePage = (props) => {
  return (
    <>
      <div className="profile-page-container">
        <Head>
          <title>Profile-Page - Handmade Attractive Grouse</title>
          <meta
            property="og:title"
            content="Profile-Page - Handmade Attractive Grouse"
          />
        </Head>
        <Navbar45 rootClassName="navbar4-root-class-name3"></Navbar45>
        <div className="profile-page-frame5">
          <div className="profile-page-profile">
            <span className="profile-page-text">
              <span>Edit Profile</span>
            </span>
            <div className="profile-page-group21">
              <div className="profile-page-group2">
                <img
                  alt="Ellipse28117"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8cea475b-8c05-43e0-992d-1c087b2ae448/aa1f60a4-c4d6-4ba3-b972-7f22db93f742?org_if_sml=116258&amp;force_format=original"
                  className="profile-page-ellipse2"
                />
              </div>
              <img
                alt="solarcameraminimalisticbold8122"
                src="/external/solarcameraminimalisticbold8122-oos.svg"
                className="profile-page-solarcameraminimalisticbold"
              />
            </div>
            <div className="profile-page-group24">
              <span className="profile-page-text02">
                <span>Name</span>
              </span>
              <div className="profile-page-group22">
                <span className="profile-page-text04">
                  <span>Melissa Peters</span>
                </span>
              </div>
            </div>
            <div className="profile-page-group25">
              <span className="profile-page-text06">
                <span>Email</span>
              </span>
              <div className="profile-page-group221">
                <span className="profile-page-text08">
                  <span>melpeters@gmail.com</span>
                </span>
              </div>
            </div>
            <div className="profile-page-group26">
              <span className="profile-page-text10">
                <span>Password</span>
              </span>
              <div className="profile-page-group222">
                <span className="profile-page-text12">
                  <span>************</span>
                </span>
              </div>
            </div>
            <div className="profile-page-group27">
              <span className="profile-page-text14">
                <span>Date of Birth</span>
              </span>
              <div className="profile-page-group223">
                <img
                  alt="materialsymbolsarrowbackios8121"
                  src="/external/materialsymbolsarrowbackios8121-uuqj.svg"
                  className="profile-page-materialsymbolsarrowbackios"
                />
                <span className="profile-page-text16">
                  <span>23/05/1995</span>
                </span>
              </div>
            </div>
            <div className="profile-page-group28">
              <span className="profile-page-text18">
                <span>Country/Region</span>
              </span>
              <div className="profile-page-group224">
                <img
                  alt="materialsymbolsarrowbackios8121"
                  src="/external/materialsymbolsarrowbackios8121-o3.svg"
                  className="profile-page-materialsymbolsarrowbackios1"
                />
                <span className="profile-page-text20">
                  <span>Nigeria</span>
                </span>
              </div>
            </div>
            <div className="profile-page-group29">
              <span className="profile-page-text22">
                <span>Save changes</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .profile-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .profile-page-frame5 {
            width: 100%;
            height: 844px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .profile-page-profile {
            left: 636px;
            width: 390px;
            bottom: -2px;
            height: 844px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .profile-page-text {
            top: 67px;
            left: 142px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group21 {
            top: 108px;
            left: 109px;
            width: 171.4709930419922px;
            height: 175.97390747070312px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-group2 {
            top: 0px;
            left: 0px;
            width: 171.4709930419922px;
            height: 175.97390747070312px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-ellipse2 {
            top: 2.2706353664398193px;
            left: 3.31878662109375px;
            width: 166px;
            height: 170px;
            position: absolute;
          }
          .profile-page-solarcameraminimalisticbold {
            top: 141px;
            left: 128px;
            width: 32px;
            height: 32px;
            position: absolute;
          }
          .profile-page-group24 {
            top: 308px;
            left: 24px;
            width: 342px;
            height: 69px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text02 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group22 {
            top: 25px;
            left: 0px;
            width: 342px;
            height: 44px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text04 {
            top: 16px;
            left: 15px;
            color: rgba(83, 76, 76, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group25 {
            top: 395px;
            left: 24px;
            width: 342px;
            height: 69px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text06 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group221 {
            top: 25px;
            left: 0px;
            width: 342px;
            height: 44px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text08 {
            top: 16px;
            left: 15px;
            color: rgba(83, 76, 76, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group26 {
            top: 482px;
            left: 24px;
            width: 342px;
            height: 69px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text10 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group222 {
            top: 25px;
            left: 0px;
            width: 342px;
            height: 44px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text12 {
            top: 16px;
            left: 15px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group27 {
            top: 569px;
            left: 24px;
            width: 342px;
            height: 69px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text14 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group223 {
            top: 25px;
            left: 0px;
            width: 342px;
            height: 44px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-materialsymbolsarrowbackios {
            top: 28px;
            left: 302px;
            width: 20px;
            height: 20px;
            position: absolute;
          }
          .profile-page-text16 {
            top: 16px;
            left: 15px;
            color: rgba(83, 76, 76, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group28 {
            top: 656px;
            left: 24px;
            width: 342px;
            height: 69px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-text18 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group224 {
            top: 25px;
            left: 0px;
            width: 342px;
            height: 44px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .profile-page-materialsymbolsarrowbackios1 {
            top: 28px;
            left: 302px;
            width: 20px;
            height: 20px;
            position: absolute;
          }
          .profile-page-text20 {
            top: 16px;
            left: 15px;
            color: rgba(83, 76, 76, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          .profile-page-group29 {
            top: 754px;
            left: 90px;
            width: 221px;
            height: 45px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: var(--dl-color-theme-primary1);
          }
          .profile-page-text22 {
            top: 14px;
            left: 44px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 87.52273321151733%;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .profile-page-profile {
              left: 0px;
              right: 0px;
              bottom: -19px;
              margin: auto;
            }
            .profile-page-group29 {
              border-color: var(--dl-color-theme-primary1);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-buttonradius);
              background-color: var(--dl-color-theme-primary1);
            }
          }
          @media (max-width: 991px) {
            .profile-page-group29 {
              background-color: var(--dl-color-theme-primary1);
            }
          }
          @media (max-width: 767px) {
            .profile-page-group29 {
              background-color: var(--dl-color-theme-primary1);
            }
          }
          @media (max-width: 479px) {
            .profile-page-group29 {
              background-color: var(--dl-color-theme-primary1);
            }
          }
        `}
      </style>
    </>
  )
}

export default ProfilePage
