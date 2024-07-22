import React from 'react'

import PropTypes from 'prop-types'

const ContactForm3 = (props) => {
  return (
    <>
      <div className="contact-form3-contact9 thq-section-padding">
        <div className="thq-section-max-width thq-flex-row contact-form3-max-width">
          <div className="contact-form3-content thq-flex-column">
            <div className="contact-form3-section-title thq-card">
              <div className="contact-form3-content1">
                <h2 className="contact-form3-text thq-heading-2">
                  {props.heading1}
                </h2>
              </div>
            </div>
            <form className="thq-card">
              <div className="contact-form3-input">
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Email"
                  className="thq-input"
                />
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Create Password"
                  className="thq-input"
                />
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Confirm Password"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-container">
                <input
                  type="checkbox"
                  id="contact-form-3-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-3-check"
                  className="contact-form3-text1 thq-body-small"
                >
                  I accept the Terms
                </label>
              </div>
              <button className="thq-button-filled contact-form3-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <label
                htmlFor="contact-form-3-check"
                className="contact-form3-text3 thq-body-small"
              >
                <span>
                  Already have an account?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contact-form3-text5">Login</span>
              </label>
              <div className="contact-form3-input1"></div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form3-contact9 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form3-content {
            gap: 0;
            flex: 1;
            align-items: stretch;
          }
          .contact-form3-section-title {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-text {
            align-self: center;
          }
          .contact-form3-input {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-container {
            flex: 0 0 auto;
            width: auto;
            height: XSmall;
            display: flex;
            align-items: flex-start;
            justify-content: stretch;
          }
          .contact-form3-text1 {
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .contact-form3-text3 {
            height: auto;
            font-size: 14px;
            align-self: center;
            font-style: Regular;
            text-align: left;
            font-family: 'Roboto';
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .contact-form3-text5 {
            color: #3030ea;
          }
          .contact-form3-input1 {
            gap: var(--dl-space-space-halfunit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .contact-form3-max-width {
              flex-direction: column;
            }
            .contact-form3-content {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact-form3-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm3.defaultProps = {
  heading1: 'Signup',
  imageAlt: 'Image1',
  action1: 'Signup',
  action: 'Submit',
  imageSrc:
    'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTAwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  signup: 'Signup',
}

ContactForm3.propTypes = {
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  action1: PropTypes.string,
  action: PropTypes.string,
  imageSrc: PropTypes.string,
  content1: PropTypes.string,
  signup: PropTypes.string,
}

export default ContactForm3
