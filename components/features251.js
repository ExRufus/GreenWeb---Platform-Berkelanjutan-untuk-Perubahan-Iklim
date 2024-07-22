import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Features251 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features251-container1 thq-section-max-width">
          <div className="features251-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features251-tab-horizontal"
            >
              <div className="features251-divider-container">
                {activeTab === 0 && (
                  <div className="features251-container2"></div>
                )}
              </div>
              <div className="features251-content">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features251-tab-horizontal1"
            >
              <div className="features251-divider-container1">
                {activeTab === 1 && (
                  <div className="features251-container3"></div>
                )}
              </div>
              <div className="features251-content1">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features251-tab-horizontal2"
            >
              <div className="features251-divider-container2">
                {activeTab === 2 && (
                  <div className="features251-container4"></div>
                )}
              </div>
              <div className="features251-content2">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
          <div className="features251-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features251-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features251-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features251-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features251-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features251-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features251-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content {
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
          .features251-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content1 {
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
          .features251-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features251-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features251-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features251-content2 {
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
          .features251-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features251-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features251-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          @media (max-width: 991px) {
            .features251-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .features251-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features251.defaultProps = {
  feature1ImgAlt: 'Carbon footprint tracking image',
  feature3ImgAlt: 'Environmental discussions image',
  feature3Title: 'Engage in Environmental Discussions',
  feature3Description:
    'Join discussion forums, share ideas, and collaborate with like-minded individuals to drive positive change.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1573490647695-2892d0bf89e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Ecosystem health monitoring image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1521731200030-352cb04121aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Monitor Ecosystem Health',
  feature1Description:
    'Monitor and calculate your carbon footprint to understand your impact on the environment.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1600680116000-9b221d511bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Stay informed about the health of ecosystems worldwide and learn how you can contribute to their preservation.',
  feature1Title: 'Track Your Carbon Footprint',
}

Features251.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features251
