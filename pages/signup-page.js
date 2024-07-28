import React from 'react'
import Head from 'next/head'

import Navbar4 from '../components/navbar4'
import SignUp10 from '../components/sign-up10'
import Navbar45 from '../components/navbar45'

const SignupPage = (props) => {
  return (
    <>
      <div className="signup-page-container">
        <Head>
          <title>Signup-Page - Handmade Attractive Grouse</title>
          <meta
            property="og:title"
            content="Signup-Page - Handmade Attractive Grouse"
          />
        </Head>
        <Navbar45 rootClassName="navbar4-root-class-name1"></Navbar45>
        <SignUp10 rootClassName="sign-up10-root-class-name"></SignUp10>
      </div>
      <style jsx>
        {`
          .signup-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default SignupPage
