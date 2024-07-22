import React from 'react'

import PropTypes from 'prop-types'

const Steps2 = (props) => {
  return (
    <>
      <div className="steps2-container thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container1 thq-grid-2">
            <div className="steps2-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps2-actions">
                <button className="thq-button-filled thq-button-animated steps2-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps2-container2">
              <div className="steps2-container3 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="steps2-text04 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps2-text05 thq-heading-3">01</label>
              </div>
              <div className="steps2-container4 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps2-text07 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps2-text08 thq-heading-3">02</label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps2-text10 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps2-text11 thq-heading-3">03</label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps2-text13 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps2-text14 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container1 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container2 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container3 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text04 {
            text-align: center;
          }
          .steps2-text05 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text07 {
            text-align: center;
          }
          .steps2-text08 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text10 {
            text-align: center;
          }
          .steps2-text11 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text13 {
            text-align: center;
          }
          .steps2-text14 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps2-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps2-container3 {
              width: 100%;
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps2-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step4Description:
    'Join our discussion forums to connect with like-minded individuals, share ideas, and collaborate on initiatives to drive positive change for the environment.',
  step1Title: 'Calculate Your Carbon Footprint',
  step2Title: 'Monitor Ecosystem Health',
  step3Title: 'Stay Informed on Environmental Issues',
  step3Description:
    'Access the latest news articles, research papers, and reports on environmental issues to stay informed and educated about pressing ecological concerns.',
  step1Description:
    'Use our carbon footprint calculator to determine your impact on the environment based on your daily activities and lifestyle choices.',
  step4Title: 'Engage in Discussions',
  step2Description:
    'Stay updated on the health of various ecosystems around the world and learn about the importance of biodiversity conservation.',
}

Steps2.propTypes = {
  step4Description: PropTypes.string,
  step1Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Title: PropTypes.string,
  step3Description: PropTypes.string,
  step1Description: PropTypes.string,
  step4Title: PropTypes.string,
  step2Description: PropTypes.string,
}

export default Steps2
