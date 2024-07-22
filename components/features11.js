import React from 'react'

import PropTypes from 'prop-types'

const Features11 = (props) => {
  return (
    <>
      <div className="features11-layout251 thq-section-padding">
        <div className="features11-max-width thq-section-max-width">
          <div className="thq-flex-row features11-section-title">
            <div className="features11-column thq-flex-column">
              <span className="thq-body-small">{props.slogan}</span>
              <h2 className="thq-heading-2 features11-text1">
                {props.sectionTitle}
              </h2>
            </div>
            <span className="thq-body-small">{props.sectionDescription}</span>
          </div>
          <div className="features11-content">
            <div className="features11-row thq-flex-row">
              <div className="features11-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features11-feature1-image"
                />
                <div className="features11-content1 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature1Title}</h3>
                  <span className="thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="features11-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features11-feature2-image"
                />
                <div className="features11-content2 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature2Title}</h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
              <div className="features11-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features11-feature3-image"
                />
                <div className="features11-content3 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature3Title}</h3>
                  <span className="thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features11-actions">
            <button className="thq-button-filled features11-button">
              <span className="thq-body-small">{props.mainAction}</span>
            </button>
            <button className="thq-button-outline features11-button1">
              <span className="thq-body-small">{props.secondaryAction}</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features11-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features11-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-column {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features11-content {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-row {
            align-items: flex-start;
          }
          .features11-feature1 {
            flex: 1;
          }
          .features11-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-feature2 {
            flex: 1;
          }
          .features11-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-feature3 {
            flex: 1;
          }
          .features11-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .features11-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features11-feature1-image {
              height: 260px;
            }
            .features11-feature2-image {
              height: 260px;
            }
            .features11-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features11-column {
              width: 100%;
            }
            .features11-text1 {
              text-align: center;
            }
            .features11-row {
              flex-direction: column;
            }
            .features11-feature1-image {
              width: 100%;
            }
            .features11-feature2 {
              width: auto;
            }
            .features11-feature2-image {
              width: 100%;
            }
            .features11-feature3 {
              width: auto;
            }
            .features11-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features11-actions {
              width: 100%;
              flex-direction: column;
            }
            .features11-button {
              width: 100%;
            }
            .features11-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features11.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1453487021979-5b739b2849f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwMjQyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1563481911853-c14860cd6947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwMjQyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Join Discussion Forums',
  slogan: 'Empower Yourself. Protect the Planet.',
  feature1Description:
    'Monitor your daily activities and calculate your carbon emissions to make informed decisions for a sustainable lifestyle.',
  feature3ImageAlt: 'Latest Environmental News Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1680458841808-c5c1219e6fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwMjQyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    'Explore the features that make our platform unique and valuable for tracking your carbon footprint and engaging in environmental discussions.',
  feature2Title: 'Ecosystem Health Monitor',
  feature3Title: 'Latest Environmental News',
  feature3Description:
    'Access the most recent news articles and research findings on environmental issues to stay informed and inspired to take action.',
  feature1ImageAlt: 'Carbon Footprint Tracker Image',
  feature2Description:
    'Stay updated on the health of ecosystems worldwide and understand the impact of human activities on biodiversity.',
  mainAction: 'Track Your Carbon Footprint',
  feature1Title: 'Carbon Footprint Tracker',
  sectionTitle: 'Key Features',
  feature2ImageAlt: 'Ecosystem Health Monitor Image',
}

Features11.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
}

export default Features11
