import React from 'react'

import PropTypes from 'prop-types'

const Contact101 = (props) => {
  return (
    <>
      <div className="contact101-container thq-section-padding">
        <div className="contact101-max-width thq-section-max-width">
          <div className="contact101-content thq-flex-row">
            <div className="contact101-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact101-content2 thq-flex-row">
            <div className="contact101-container1">
              <img
                alt={props.location1ImageAlt}
                src={props.location1ImageSrc}
                className="contact101-image thq-img-ratio-16-9"
              />
              <h3 className="contact101-text2 thq-heading-3">
                {props.location1}
              </h3>
              <p className="thq-body-large">{props.location1Description}</p>
              <div className="contact101-container2">
                <span className="thq-button-flat thq-body-small">
                  Get directions
                </span>
              </div>
            </div>
            <div className="contact101-container3">
              <img
                alt={props.location2ImageAlt}
                src={props.location2ImageSrc}
                className="contact101-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact101-text5 thq-heading-3">
                {props.location2}
              </h3>
              <p className="thq-body-large">{props.location2Description}</p>
              <div className="contact101-container4">
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
          .contact101-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact101-max-width {
            align-self: center;
          }
          .contact101-content {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .contact101-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact101-content2 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact101-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact101-image {
            object-fit: cover;
          }
          .contact101-text2 {
            text-align: center;
          }
          .contact101-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact101-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact101-image1 {
            object-fit: cover;
          }
          .contact101-text5 {
            text-align: center;
          }
          .contact101-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .contact101-content {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact101-content2 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact101-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact101-image {
              width: 100%;
            }
            .contact101-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact101.defaultProps = {
  location1ImageSrc:
    'https://images.unsplash.com/photo-1556761175-129418cb2dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Have questions or feedback? Feel free to reach out to us.',
  location1: 'Email: contact@carbontracker.com',
  heading1: 'Contact Us',
  location2Description: 'Visit us at our office for a chat',
  location1ImageAlt: 'Email Icon',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1675179180217-0688a424b1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: 'For general inquiries and support',
  location2ImageAlt: 'Location Icon',
  location2: 'Address: 123 Green Street, Eco City, Earth',
}

Contact101.propTypes = {
  location1ImageSrc: PropTypes.string,
  content1: PropTypes.string,
  location1: PropTypes.string,
  heading1: PropTypes.string,
  location2Description: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location2: PropTypes.string,
}

export default Contact101
