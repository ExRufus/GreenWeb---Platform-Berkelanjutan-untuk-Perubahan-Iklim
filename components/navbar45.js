import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navbar45 = (props) => {
  return (
    <>
      <header className={`navbar45-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar45-navbar-interactive">
          <span>
          GreenWeb - Platform Berkelanjutan untuk Perubahan Iklim
          </span>
          <div data-thq="thq-navbar-nav" className="navbar45-desktop-menu">
            <nav className="navbar45-links">
              <span className="thq-link thq-body-small"><Link href={"/"}>{props.link1}</Link></span>
              <span className="thq-link thq-body-small"><Link href={"/about-page"}>{props.link3}</Link></span>
              <span className="thq-link thq-body-small"><Link href={"/community-page"}>{props.link2}</Link></span>
              <span className="thq-link thq-body-small"><Link href={"/activity-page"}>{props.link4}</Link></span>
              
            </nav>
            <div className="navbar45-buttons">
              <Link href="/login-page">
                <a className="navbar45-link thq-button-outline thq-button-animated">
                  <span className="thq-body-small">Login</span>
                </a>
              </Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar45-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar45-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar45-mobile-menu">
            <div className="navbar45-nav">
              <div className="navbar45-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar45-logo"
                />
                <div data-thq="thq-close-menu" className="navbar45-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar45-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar45-links1">
                <span className="thq-link thq-body-small">{props.link1}</span>
                <span className="thq-link thq-body-small">{props.link2}</span>
                <span className="thq-link thq-body-small">{props.link3}</span>
                <span className="thq-link thq-body-small">{props.link4}</span>
                <span className="thq-link thq-body-small">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar45-buttons1">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar45-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar45-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar45-image1 {
            height: 3rem;
          }
          .navbar45-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar45-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar45-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navbar45-link {
            display: flex;
            flex-direction: row;
            text-decoration: none;
          }
          .navbar45-burger-menu {
            display: none;
          }
          .navbar45-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar45-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar45-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar45-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar45-logo {
            height: 3rem;
          }
          .navbar45-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar45-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar45-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar45-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }

          @media (max-width: 767px) {
            .navbar45-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar45-desktop-menu {
              display: none;
            }
            .navbar45-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar45-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar45-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar45.defaultProps = {
  link2: 'Community',
  action1: 'Track your carbon footprint',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link3: 'About',
  action2: 'Monitor ecosystem health',
  link5: 'Discussion Forums',
  link1: 'Home',
  logoAlt: 'Environmental Hub Logo',
  link4: 'Activity',
  rootClassName: '',
}

Navbar45.propTypes = {
  link2: PropTypes.string,
  action1: PropTypes.string,
  logoSrc: PropTypes.string,
  link3: PropTypes.string,
  action2: PropTypes.string,
  link5: PropTypes.string,
  link1: PropTypes.string,
  logoAlt: PropTypes.string,
  link4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar45
