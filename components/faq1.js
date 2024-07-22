import React from 'react'

import PropTypes from 'prop-types'

const FAQ1 = (props) => {
  return (
    <>
      <div className="faq1-faq7 thq-section-padding">
        <div className="faq1-max-width thq-section-max-width">
          <div className="thq-flex-column">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="faq1-text1 thq-body-large">{props.content1}</p>
          </div>
          <div className="thq-flex-column faq1-list">
            <div className="faq1-list-item1">
              <p className="faq1-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="thq-body-small">{props.faq1Answer}</span>
            </div>
            <div className="faq1-list-item2">
              <p className="faq1-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <span className="thq-body-small">{props.faq2Answer}</span>
            </div>
            <div className="faq1-list-item3">
              <p className="faq1-faq3-question thq-body-large">
                {props.faq3Question}
              </p>
              <span className="thq-body-small">{props.faq3Answer}</span>
            </div>
            <div className="faq1-list-item4">
              <p className="faq1-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="thq-body-small">{props.faq4Answer}</span>
            </div>
            <div className="faq1-list-item5">
              <p className="faq1-faq5-question thq-body-large">
                {props.faq5Question}
              </p>
              <span className="thq-body-small">{props.faq5Answer}</span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq1-content1">
              <h2 className="thq-heading-2">{props.heading2}</h2>
              <p className="faq1-text3 thq-body-large">{props.content2}</p>
            </div>
            <div className="faq1-container">
              <button className="thq-button-outline faq1-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq1-faq7 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .faq1-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text1 {
            text-align: center;
          }
          .faq1-list-item1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq1-question {
            font-weight: 600;
          }
          .faq1-list-item2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq2-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-list-item3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq3-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-list-item4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq4-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-list-item5 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq5-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-content1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text3 {
            text-align: center;
          }
          .faq1-container {
            display: flex;
            position: relative;
          }
          @media (max-width: 991px) {
            .faq1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .faq1-text1 {
              text-align: left;
            }
            .faq1-list {
              gap: var(--dl-space-space-twounits);
            }
            .faq1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ1.defaultProps = {
  action1: 'Contact',
  heading2: 'Still have a question?',
  faq1Answer:
    'A carbon footprint is the total amount of greenhouse gases produced directly and indirectly to support human activities, usually expressed in equivalent tons of carbon dioxide (CO2).',
  faq5Question: 'How can I engage in discussions on this platform?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq2Answer:
    'You can reduce your carbon footprint by using energy more efficiently, reducing waste, eating a plant-based diet, using public transportation, and supporting renewable energy sources.',
  faq1Question: 'What is a carbon footprint?',
  heading1: 'FAQs',
  faq4Question: 'How can I stay informed on environmental issues?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq5Answer:
    'You can engage in discussions on this platform by joining our forums, commenting on articles, sharing your thoughts on social media, and participating in virtual events.',
  faq4Answer:
    'You can stay informed on environmental issues by following reputable news sources, subscribing to environmental newsletters, attending conferences, and engaging with environmental organizations.',
  faq2Question: 'How can I reduce my carbon footprint?',
  faq3Question: 'Why is monitoring ecosystem health important?',
  faq3Answer:
    'Monitoring ecosystem health is crucial to understand the impacts of human activities on the environment, identify areas for conservation efforts, and ensure the well-being of biodiversity.',
}

FAQ1.propTypes = {
  action1: PropTypes.string,
  heading2: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  content1: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq1Question: PropTypes.string,
  heading1: PropTypes.string,
  faq4Question: PropTypes.string,
  content2: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  faq3Question: PropTypes.string,
  faq3Answer: PropTypes.string,
}

export default FAQ1
