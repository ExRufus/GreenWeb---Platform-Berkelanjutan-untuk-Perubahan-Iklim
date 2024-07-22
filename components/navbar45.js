import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navbar45 = (props) => {
  return (
    <>
      <header className={`navbar451-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar451-navbar-interactive">
          <span>
          GreenWeb - Platform Berkelanjutan untuk Perubahan Iklim
          </span>
          <div data-thq="thq-navbar-nav" className="navbar451-desktop-menu">
            <nav className="navbar451-links">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
            <div className="navbar451-buttons">
              <Link href="/login-page">
                <a className="navbar451-link thq-button-outline thq-button-animated">
                  <span className="thq-body-small">Login</span>
                </a>
              </Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar451-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar451-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar451-mobile-menu">
            <div className="navbar451-nav">
              <div className="navbar451-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar451-logo"
                />
                <div data-thq="thq-close-menu" className="navbar451-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar451-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar451-links1">
                <span className="thq-link thq-body-small">{props.link1}</span>
                <span className="thq-link thq-body-small">{props.link2}</span>
                <span className="thq-link thq-body-small">{props.link3}</span>
                <span className="thq-link thq-body-small">{props.link4}</span>
                <span className="thq-link thq-body-small">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar451-buttons1">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar451-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar451-navbar-interactive {
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
          .navbar451-image1 {
            height: 3rem;
          }
          .navbar451-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar451-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar451-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navbar451-link {
            display: flex;
            flex-direction: row;
            text-decoration: none;
          }
          .navbar451-burger-menu {
            display: none;
          }
          .navbar451-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar451-mobile-menu {
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
          .navbar451-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar451-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar451-logo {
            height: 3rem;
          }
          .navbar451-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar451-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar451-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar451-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }

          @media (max-width: 767px) {
            .navbar451-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar451-desktop-menu {
              display: none;
            }
            .navbar451-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar451-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar451-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar451.defaultProps = {
  link2: 'Carbon Footprint Tracker',
  action1: 'Track your carbon footprint',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link3: 'Ecosystem Health Monitor',
  action2: 'Monitor ecosystem health',
  link5: 'Discussion Forums',
  link1: 'Home',
  logoAlt: 'Environmental Hub Logo',
  link4: 'Environmental News',
  rootClassName: '',
}

Navbar451.propTypes = {
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

export default Navbar451
