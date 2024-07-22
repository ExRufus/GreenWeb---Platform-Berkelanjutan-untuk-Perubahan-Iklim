import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Features241 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features241-container1 thq-section-max-width">
          <div className="features241-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features241-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features241-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features241-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features241-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features241-tab-horizontal"
            >
              <div className="features241-divider-container">
                {activeTab === 0 && (
                  <div className="features241-container2"></div>
                )}
              </div>
              <div className="features241-content">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features241-tab-horizontal1"
            >
              <div className="features241-divider-container1">
                {activeTab === 1 && (
                  <div className="features241-container3"></div>
                )}
              </div>
              <div className="features241-content1">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features241-tab-horizontal2"
            >
              <div className="features241-divider-container2">
                {activeTab === 2 && (
                  <div className="features241-container4"></div>
                )}
              </div>
              <div className="features241-content2">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features241-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features241-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features241-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features241-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features241-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features241-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features241-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features241-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features241-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features241-content {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features241-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features241-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features241-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features241-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features241-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features241-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features241-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features241-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .features241-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features241.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1581626221838-9715c0e06049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Discussion forum icon',
  feature2ImgAlt: 'News and articles icon',
  feature2Description:
    'Stay informed with the latest news and research articles',
  feature3Description: 'Engage in discussions with like-minded individuals',
  feature1Description: 'Track your carbon footprint and learn how to reduce it',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1620797959761-a3a3338f42af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Carbon Footprint Tracking',
  feature3Title: 'Discussion Forums',
  feature1ImgAlt: 'Carbon footprint tracker tool',
  feature2Title: 'Latest News and Research',
}

Features241.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features241
