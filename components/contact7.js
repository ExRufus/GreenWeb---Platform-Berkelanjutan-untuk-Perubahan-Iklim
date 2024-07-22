import React from 'react'

import PropTypes from 'prop-types'

const Contact7 = (props) => {
  return (
    <>
      <div className="contact7-container thq-section-padding">
        <div className="contact7-max-width thq-section-max-width">
          <div className="contact7-content thq-flex-row">
            <div className="contact7-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact7-content2 thq-flex-row">
            <div className="contact7-container1">
              <img
                alt={props.location1ImgAlt}
                src={props.location1ImgSrc}
                className="contact7-image thq-img-ratio-16-9"
              />
              <h3 className="contact7-text2 thq-heading-3">
                {props.location1}
              </h3>
              <p className="thq-body-large">{props.location1Description}</p>
              <div className="contact7-container2">
                <span className="thq-button-flat thq-body-small">
                  Get directions
                </span>
              </div>
            </div>
            <div className="contact7-container3">
              <img
                alt={props.location2ImgAlt}
                src={props.location2ImgSrc}
                className="contact7-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text5 thq-heading-3">
                {props.location2}
              </h3>
              <p className="thq-body-large">{props.location2Description}</p>
              <div className="contact7-container4">
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
          .contact7-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact7-max-width {
            align-self: center;
          }
          .contact7-content {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .contact7-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-content2 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact7-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image {
            object-fit: cover;
          }
          .contact7-text2 {
            text-align: center;
          }
          .contact7-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image1 {
            object-fit: cover;
          }
          .contact7-text5 {
            text-align: center;
          }
          .contact7-container4 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .contact7-content2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact7-image {
              width: 100%;
            }
            .contact7-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact7.defaultProps = {
  content1:
    'For general inquiries and information, please contact us at headquarters@example.com',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1579154491781-5e199df316aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTAwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Contact Us',
  location2: 'Support Center',
  location1: 'Headquarters',
  location2ImgAlt: 'Support Center Image Alt Text',
  location1Description: '123 Green Street, Eco City, Earth',
  location1ImgSrc:
    'https://images.unsplash.com/photo-1605265536375-622ec6325c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTAwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImgAlt: 'Headquarters Image Alt Text',
  location2Description: '456 Sustainable Avenue, Green Town, Earth',
}

Contact7.propTypes = {
  content1: PropTypes.string,
  location2ImgSrc: PropTypes.string,
  heading1: PropTypes.string,
  location2: PropTypes.string,
  location1: PropTypes.string,
  location2ImgAlt: PropTypes.string,
  location1Description: PropTypes.string,
  location1ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location2Description: PropTypes.string,
}

export default Contact7
