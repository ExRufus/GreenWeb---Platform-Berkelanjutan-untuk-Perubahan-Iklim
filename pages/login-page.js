import React from 'react'
import Head from 'next/head'

import Navbar4 from '../components/navbar4'
import SignUp10 from '../components/sign-up10'

const LoginPage = (props) => {
  return (
    <>
      <div className="login-page-container">
        <Head>
          <title>Login-Page - Handmade Attractive Grouse</title>
          <meta
            property="og:title"
            content="Login-Page - Handmade Attractive Grouse"
          />
        </Head>
        <Navbar4 rootClassName="navbar4-root-class-name"></Navbar4>
        <SignUp10 rootClassName="sign-up10-root-class-name1"></SignUp10>
      </div>
      <style jsx>
        {`
          .login-page-container {
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

export default LoginPage
