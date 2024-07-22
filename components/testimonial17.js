import React from 'react'

import PropTypes from 'prop-types'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="testimonial17-text01 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card"
                >
                  <div className="testimonial17-container02">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image"
                    />
                    <div className="testimonial17-container03">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text04 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container04">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container05">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text07 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container06">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container07">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text10 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container08">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container09">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text13 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-text01 {
            text-align: center;
          }
          .testimonial17-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text04 {
            text-align: left;
          }
          .testimonial17-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text07 {
            text-align: left;
          }
          .testimonial17-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text10 {
            text-align: left;
          }
          .testimonial17-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text13 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial17-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card {
              width: 100%;
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author4Alt: 'Image of Michael Brown',
  author2Name: 'John Doe',
  author1Position: 'Environmental Advocate',
  author1Alt: 'Image of Sarah Smith',
  review1:
    'I love how easy it is to track my carbon footprint using this website. It has motivated me to make more sustainable choices in my daily life.',
  author2Src:
    'https://images.unsplash.com/photo-1589973033042-acd254cb2283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM2NDE1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    'The ecosystem health monitoring tools provided here are invaluable for anyone passionate about protecting the environment. Highly recommended!',
  review4:
    'I appreciate the actionable tips and resources available on this website. It has empowered me to make a tangible impact on the environment.',
  author3Alt: 'Image of Emily Johnson',
  author2Alt: 'Image of John Doe',
  author4Name: 'Michael Brown',
  author3Position: 'Nature Enthusiast',
  author2Position: 'Conservationist',
  author3Name: 'Emily Johnson',
  author4Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM2NDE1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author4Position: 'Climate Activist',
  author3Src:
    'https://images.unsplash.com/photo-1599226335946-faf96a7cc10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM2NDE1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTM2NDE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Read what our users have to say about their experience with our platform.',
  review3:
    'Engaging in discussions on this platform has broadened my understanding of environmental issues and inspired me to get more involved in local initiatives.',
  author1Name: 'Sarah Smith',
}

Testimonial17.propTypes = {
  author4Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author1Position: PropTypes.string,
  author1Alt: PropTypes.string,
  review1: PropTypes.string,
  author2Src: PropTypes.string,
  review2: PropTypes.string,
  review4: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Name: PropTypes.string,
  author3Position: PropTypes.string,
  author2Position: PropTypes.string,
  author3Name: PropTypes.string,
  author4Src: PropTypes.string,
  heading1: PropTypes.string,
  author4Position: PropTypes.string,
  author3Src: PropTypes.string,
  author1Src: PropTypes.string,
  content1: PropTypes.string,
  review3: PropTypes.string,
  author1Name: PropTypes.string,
}

export default Testimonial17
