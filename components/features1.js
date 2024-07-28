import React from 'react'

import PropTypes from 'prop-types'
import Link from 'next/link'

const Features1 = (props) => {
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <span className="thq-body-small">{props.slogan}</span>
              <h2 className="thq-heading-2 features1-text1">
                {props.sectionTitle}
              </h2>
            </div>
            <span className="thq-body-small">{props.sectionDescription}</span>
          </div>
          <div className="features1-content">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content1 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature1Title}</h3>
                  <span className="thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature2Title}</h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature3Title}</h3>
                  <span className="thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features1-actions">
            <button className="thq-button-filled features1-button">
              <span className="thq-body-small"><Link href={"/activity-page"}>{props.mainAction}</Link></span>
            </button>
            <button className="thq-button-outline features1-button1">
              <span className="thq-body-small"><Link href={"/community-page"}>{props.secondaryAction}</Link></span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-column {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-content {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-row {
            align-items: flex-start;
          }
          .features1-feature1 {
            flex: 1;
          }
          .features1-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature2 {
            flex: 1;
          }
          .features1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature3 {
            flex: 1;
          }
          .features1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .features1-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features1-feature1-image {
              height: 260px;
            }
            .features1-feature2-image {
              height: 260px;
            }
            .features1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-column {
              width: 100%;
            }
            .features1-text1 {
              text-align: center;
            }
            .features1-row {
              flex-direction: column;
            }
            .features1-feature1-image {
              width: 100%;
            }
            .features1-feature2 {
              width: auto;
            }
            .features1-feature2-image {
              width: 100%;
            }
            .features1-feature3 {
              width: auto;
            }
            .features1-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features1-actions {
              width: 100%;
              flex-direction: column;
            }
            .features1-button {
              width: 100%;
            }
            .features1-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  sectionDescription:
    'Explore the key features of our platform that can help you stay informed and take action for the environment.',
  feature2Title: 'Carbon Footprint Tracker',
  mainAction: 'Track Your Carbon Footprint',
  feature1Title: 'Latest News and Research',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1574169207511-e21a21c8075a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI4NDgxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: 'Empowering Change Through Knowledge',
  feature1Description:
    'Stay updated with the most recent news and research findings in the field of environment and climate change.',
  feature2ImageAlt: 'Image depicting Carbon Footprint Tracker',
  secondaryAction: 'Join the Discussion Forums',
  feature3Description:
    'Keep tabs on the sustainability of the environment you live in through our ecosystem health tracker.',
  feature3Title: 'Ecosystem Health Tracker',
  sectionTitle: 'Features',
  feature1ImageAlt: 'Image depicting Latest News and Research',
  feature2Description:
    'Monitor your individual or group carbon footprint with detailed insights on key sources of emissions.',
  feature3ImageAlt: 'Image depicting Ecosystem Health Tracker',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1575468130861-a5295155e1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI4NDgxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1713947506827-c646da3ad1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI4NDgxMXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  sectionDescription: PropTypes.string,
  feature2Title: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features1
