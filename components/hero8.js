import React from 'react'

import PropTypes from 'prop-types'

const Hero8 = (props) => {
  return (
    <>
      <div className="hero8-header26 thq-section-padding">
        <div className="hero8-max-width thq-section-max-width thq-flex-column">
          <div className="hero8-column">
            <div className="hero8-content">
              <h1 className="hero8-text thq-heading-1">{props.heading1}</h1>
              <p className="hero8-text1 thq-body-large">{props.content1}</p>
              <div className="hero8-actions">
                <button className="thq-button-filled hero8-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
                <button className="thq-button-outline hero8-button1">
                  <span className="thq-body-small">{props.action2}</span>
                </button>
              </div>
            </div>
          </div>
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero8-header26 {
            gap: var(--dl-space-space-twounits);
          }
          .hero8-max-width {
            align-self: center;
          }
          .hero8-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero8-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero8-text {
            text-align: center;
          }
          .hero8-text1 {
            text-align: center;
          }
          .hero8-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 479px) {
            .hero8-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero8-button {
              width: 100%;
            }
            .hero8-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero8.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1561377809-d598b7d2723c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwMjQyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Image of person tracking carbon footprint on a smartphone',
  heading1: 'Monitor Your Impact',
  content1: 'Track your carbon footprint and contribute to a healthier planet',
  action1: 'Learn More',
  action2: 'Join now',
}

Hero8.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero8
