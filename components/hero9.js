import React from 'react'

import PropTypes from 'prop-types'
import Link from 'next/link'

const Hero9 = (props) => {
  return (
    <>
      <div className="hero9-header30 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero9-image"
        />
        <div className="hero9-container"></div>
        <div className="hero9-max-width thq-section-max-width">
          <div className="hero9-content">
            <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
            <p className="hero9-text1 thq-body-large">{props.content1}</p>
            <div className="hero9-actions">
              <button className="thq-button-filled hero9-button">
                <span className="hero9-text2 thq-body-small">
                <Link href={"/activity-page"}>{props.action1}</Link>
                </span>
              </button>
              <button className="thq-button-outline hero9-button1">
                <span className="hero9-text3 thq-body-small">
                <Link href={"/community-page"}>{props.action2}</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero9-header30 {
            gap: var(--dl-space-space-twounits);
          }
          .hero9-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero9-container {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.7);
          }
          .hero9-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .hero9-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero9-text {
            text-align: center;
          }
          .hero9-text1 {
            text-align: center;
          }
          .hero9-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero9-text2 {
            text-align: center;
          }
          .hero9-text3 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .hero9-text {
              text-align: center;
            }
            .hero9-text1 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .hero9-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero9-button {
              width: 100%;
            }
            .hero9-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero9.defaultProps = {
  action2: 'Join the Discussion',
  image1Src:
    'https://images.unsplash.com/photo-1569163139394-de4e5f43e5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI4NDgxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Track Your Carbon Footprint',
  heading1: 'Stay Informed on Environment and Climate Change',
  content1:
    'Explore the latest news, research, and insights to stay up-to-date on pressing environmental issues.',
  image1Alt: 'Image of a person reading news on a tablet',
}

Hero9.propTypes = {
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero9
