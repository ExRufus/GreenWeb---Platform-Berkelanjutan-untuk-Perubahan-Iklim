import React from 'react'

import PropTypes from 'prop-types'

const Steps1 = (props) => {
  return (
    <>
      <div className="steps1-container thq-section-padding">
        <div className="steps1-max-width thq-section-max-width">
          <div className="steps1-container1">
            <div className="steps1-container2 thq-card">
              <img
                alt={props.step1ImageAlt}
                src={props.step1ImageSrc}
                className="steps1-image thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps1-text01 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps1-text02 thq-heading-3">01</label>
            </div>
            <div className="steps1-container3 thq-card">
              <img
                alt={props.step2Alt}
                src={props.step2ImageSrc}
                className="steps1-image1 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps1-text04 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps1-text05 thq-heading-3">02</label>
            </div>
          </div>
          <div className="steps1-container4">
            <div className="steps1-container5 thq-card">
              <img
                alt={props.step3ImageAlt}
                src={props.step3ImageSrc}
                className="steps1-image2 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps1-text07 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps1-text08 thq-heading-3">03</label>
            </div>
            <div className="steps1-container6 thq-card">
              <img
                alt={props.step4ImageAlt}
                src={props.step4ImageSrc}
                className="steps1-image3 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps1-text10 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps1-text11 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps1-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps1-max-width {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container2 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-large);
          }
          .steps1-text01 {
            text-align: center;
          }
          .steps1-text02 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container3 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image1 {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-large);
          }
          .steps1-text04 {
            text-align: center;
          }
          .steps1-text05 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container4 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container5 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image2 {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-large);
          }
          .steps1-text07 {
            text-align: center;
          }
          .steps1-text08 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container6 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image3 {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-large);
          }
          .steps1-text10 {
            text-align: center;
          }
          .steps1-text11 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps1-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps1-container1 {
              flex-direction: column;
            }
            .steps1-container2 {
              width: 100%;
            }
            .steps1-container3 {
              width: 100%;
            }
            .steps1-container4 {
              flex-direction: column;
            }
            .steps1-container5 {
              width: 100%;
            }
            .steps1-container6 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps1.defaultProps = {
  step3ImageSrc:
    'https://images.unsplash.com/photo-1616706456751-8859eab42c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM5MTgzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  step2Description:
    'Stay updated on the health of ecosystems worldwide and learn how you can contribute to their preservation.',
  step1ImageAlt: 'Image of person calculating carbon footprint',
  step1Description:
    'Use our carbon footprint calculator to determine your impact on the environment.',
  step4ImageSrc:
    'https://images.unsplash.com/photo-1592823751801-c4c777a36777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM5MTgzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  step3ImageAlt: 'Image of person reading environmental news',
  step2Title: 'Monitor Ecosystem Health',
  step1Title: 'Calculate Your Carbon Footprint',
  step4Title: 'Engage in Discussions and Take Action',
  step3Title: 'Stay Informed on Environmental Issues',
  step4Description:
    'Join our forums to discuss environmental issues with like-minded individuals and find ways to take action for a sustainable future.',
  step3Description:
    'Access the latest news and research articles on environmental topics to stay informed and educated.',
  step2Alt: 'Illustration of diverse ecosystems',
  step4ImageAlt: 'Image of people participating in environmental discussion',
  step2ImageSrc:
    'https://images.unsplash.com/photo-1581092787765-e3feb951d987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM5MTgzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  step1ImageSrc:
    'https://images.unsplash.com/photo-1444312645910-ffa973656eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM5MTgzNHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Steps1.propTypes = {
  step3ImageSrc: PropTypes.string,
  step2Description: PropTypes.string,
  step1ImageAlt: PropTypes.string,
  step1Description: PropTypes.string,
  step4ImageSrc: PropTypes.string,
  step3ImageAlt: PropTypes.string,
  step2Title: PropTypes.string,
  step1Title: PropTypes.string,
  step4Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Alt: PropTypes.string,
  step4ImageAlt: PropTypes.string,
  step2ImageSrc: PropTypes.string,
  step1ImageSrc: PropTypes.string,
}

export default Steps1
