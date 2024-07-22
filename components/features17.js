import React from 'react'

import PropTypes from 'prop-types'

const Features17 = (props) => {
  return (
    <>
      <div className="features17-layout349 thq-section-padding">
        <div className="features17-max-width thq-section-max-width">
          <div className="features17-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
          <div className="features17-content">
            <div className="features17-section-title">
              <span className="thq-body-small">{props.feature1Slogan}</span>
              <div className="features17-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <p className="thq-body-large">{props.feature1Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features17-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features17-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features17-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features17-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features17-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features17-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .features17-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features17.defaultProps = {
  feature1ImageAlt: 'Carbon footprint tracking',
  feature1Slogan: 'Monitor and reduce your impact on the environment',
  feature1Title: 'Track Your Carbon Footprint',
  feature1Description:
    'Use our tools to calculate and track your carbon footprint over time, and receive personalized tips on how to lower it.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1554941426-5eb1f0a4e107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features17.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features17
