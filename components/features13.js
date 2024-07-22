import React from 'react'

import PropTypes from 'prop-types'

const Features13 = (props) => {
  return (
    <>
      <div className="features13-layout226 thq-section-padding">
        <div className="features13-max-width thq-section-max-width">
          <div className="thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="thq-flex-column">
              <span className="features13-over-title1 thq-body-small">
                {props.feature1Slogan}
              </span>
              <div className="thq-flex-column features13-content">
                <h3 className="features13-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="features13-description1 thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
              <div className="thq-flex-row features13-actions">
                <button className="thq-button-filled features13-button">
                  <span className="features13-action1 thq-body-small">
                    {props.feature1MainAction}
                  </span>
                </button>
                <button className="thq-button-outline features13-button1">
                  <span className="features13-action2 thq-body-small">
                    {props.feature1SecondaryAction}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="thq-flex-column">
              <span className="features13-over-title2 thq-body-small">
                {props.feature2Slogan}
              </span>
              <div className="thq-flex-column">
                <h3 className="features13-title2 thq-heading-3">
                  {props.feature2Title}
                </h3>
                <span className="features13-description2 thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
              <div className="thq-flex-row features13-actions1">
                <button className="thq-button-filled features13-button2">
                  <span className="features13-action11 thq-body-small">
                    {props.feature2MainAction}
                  </span>
                </button>
                <button className="thq-button-outline features13-button3">
                  <span className="features13-action21 thq-body-small">
                    {props.feature2Action2}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features13-layout226 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
          }
          .features13-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .features13-over-title1 {
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: Roboto;
            font-weight: 600px;
            line-height: 150%;
            font-stretch: normal;
          }
          .features13-title1 {
            text-align: center;
          }
          .features13-description1 {
            text-align: center;
          }
          .features13-action1 {
            text-align: center;
          }
          .features13-action2 {
            text-align: center;
          }
          .features13-over-title2 {
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: Roboto;
            line-height: 150%;
            font-stretch: normal;
          }
          .features13-title2 {
            text-align: center;
          }
          .features13-description2 {
            text-align: center;
          }
          .features13-action11 {
            text-align: center;
          }
          .features13-action21 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .features13-layout226 {
              flex-direction: column;
            }
            .features13-max-width {
              flex-direction: column;
            }
            .features13-content {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .features13-actions {
              flex-wrap: wrap;
            }
            .features13-actions1 {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features13-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features13-button {
              width: 100%;
            }
            .features13-button1 {
              width: 100%;
            }
            .features13-button2 {
              width: 100%;
            }
            .features13-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features13.defaultProps = {
  feature2ImageAlt: 'Image of Ecosystem Health Monitor',
  feature2Slogan: 'Stay informed about the state of ecosystems',
  feature1SecondaryAction: 'Learn More',
  feature2Title: 'Ecosystem Health Monitor',
  feature2MainAction: 'Check Ecosystems',
  feature1MainAction: 'Start Tracking',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1603707676399-e143c4423f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM5MjI2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Slogan: 'Monitor your impact on the environment',
  feature2Description:
    'Access real-time data and updates on ecosystem health worldwide. Engage in discussions to learn and contribute.',
  feature2Action2: 'Join Discussions',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1521058670233-1d18329b906b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM5MjI2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Image of Carbon Footprint Tracker',
  feature1Title: 'Carbon Footprint Tracker',
  feature1Description:
    'Use our tool to calculate and track your carbon footprint based on your daily activities.',
}

Features13.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature1SecondaryAction: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2MainAction: PropTypes.string,
  feature1MainAction: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Action2: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features13
