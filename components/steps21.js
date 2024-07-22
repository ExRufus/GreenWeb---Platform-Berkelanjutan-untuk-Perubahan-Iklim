import React from 'react'

import PropTypes from 'prop-types'

const Steps21 = (props) => {
  return (
    <>
      <div className="steps21-container thq-section-padding">
        <div className="steps21-max-width thq-section-max-width">
          <div className="steps21-container1 thq-grid-2">
            <div className="steps21-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps21-actions">
                <button className="thq-button-filled thq-button-animated steps21-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps21-container2">
              <div className="steps21-container3 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="steps21-text04 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps21-text05 thq-heading-3">01</label>
              </div>
              <div className="steps21-container4 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps21-text07 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps21-text08 thq-heading-3">02</label>
              </div>
              <div className="steps21-container5 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps21-text10 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps21-text11 thq-heading-3">03</label>
              </div>
              <div className="steps21-container6 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps21-text13 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps21-text14 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps21-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps21-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps21-container1 {
            align-items: start;
          }
          .steps21-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps21-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps21-container2 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps21-container3 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps21-text04 {
            text-align: center;
          }
          .steps21-text05 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps21-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps21-text07 {
            text-align: center;
          }
          .steps21-text08 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps21-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps21-text10 {
            text-align: center;
          }
          .steps21-text11 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps21-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps21-text13 {
            text-align: center;
          }
          .steps21-text14 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps21-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps21-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps21-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps21-container3 {
              width: 100%;
            }
            .steps21-container4 {
              width: 100%;
            }
            .steps21-container5 {
              width: 100%;
            }
            .steps21-container6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps21-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps21.defaultProps = {
  step3Title: 'Stay Informed on Environmental Issues',
  step2Title: 'Monitor Ecosystem Health',
  step3Description:
    'Access the latest news articles, research papers, and informative resources to deepen your understanding of pressing environmental issues.',
  step1Title: 'Calculate Your Carbon Footprint',
  step2Description:
    'Stay updated on the health of various ecosystems around the world through real-time data and reports from environmental organizations.',
  step1Description:
    'Use our carbon footprint calculator to determine your impact on the environment based on your daily activities and lifestyle choices.',
  step4Title: 'Engage in Discussions',
  step4Description:
    'Join our discussion forums to connect with like-minded individuals, share ideas, and collaborate on solutions to environmental challenges.',
}

Steps21.propTypes = {
  step3Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Description: PropTypes.string,
  step1Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Description: PropTypes.string,
  step4Title: PropTypes.string,
  step4Description: PropTypes.string,
}

export default Steps21
