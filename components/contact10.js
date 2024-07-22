import React from 'react'

import PropTypes from 'prop-types'

const Contact10 = (props) => {
  return (
    <>
      <div className="contact10-container thq-section-padding">
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content thq-flex-row">
            <div className="contact10-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact10-content2 thq-flex-row">
            <div className="contact10-container1">
              <img
                alt={props.location1ImageAlt}
                src={props.location1ImageSrc}
                className="contact10-image thq-img-ratio-16-9"
              />
              <h3 className="contact10-text2 thq-heading-3">
                {props.location1}
              </h3>
              <p className="thq-body-large">{props.location1Description}</p>
              <div className="contact10-container2">
                <span className="thq-button-flat thq-body-small">
                  Get directions
                </span>
              </div>
            </div>
            <div className="contact10-container3">
              <img
                alt={props.location2ImageAlt}
                src={props.location2ImageSrc}
                className="contact10-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact10-text5 thq-heading-3">
                {props.location2}
              </h3>
              <p className="thq-body-large">{props.location2Description}</p>
              <div className="contact10-container4">
                <span className="thq-button-flat thq-body-small">
                  Get directions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact10-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-max-width {
            align-self: center;
          }
          .contact10-content {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .contact10-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-content2 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact10-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image {
            object-fit: cover;
          }
          .contact10-text2 {
            text-align: center;
          }
          .contact10-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image1 {
            object-fit: cover;
          }
          .contact10-text5 {
            text-align: center;
          }
          .contact10-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .contact10-content {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact10-content2 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact10-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact10-image {
              width: 100%;
            }
            .contact10-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact10.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1501420193726-1f65acd36cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM2NDE0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  location2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location1ImageAlt: 'image1Alt',
  location2: 'Cluj - Napoca',
  location1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM2NDE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1: 'Bucharest',
  heading1: 'Locations',
  location2ImageAlt: 'image2Alt',
}

Contact10.propTypes = {
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location2: PropTypes.string,
  location1Description: PropTypes.string,
  content1: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1: PropTypes.string,
  heading1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
