import React from 'react'

import PropTypes from 'prop-types'

const Testimonial171 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial171-max-width thq-section-max-width">
          <div className="testimonial171-container">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="testimonial171-text01 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card"
                >
                  <div className="testimonial171-container02">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial171-image"
                    />
                    <div className="testimonial171-container03">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text04 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card1"
                >
                  <div className="testimonial171-container04">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial171-image1"
                    />
                    <div className="testimonial171-container05">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text07 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card2"
                >
                  <div className="testimonial171-container06">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial171-image2"
                    />
                    <div className="testimonial171-container07">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text10 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card3"
                >
                  <div className="testimonial171-container08">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial171-image3"
                    />
                    <div className="testimonial171-container09">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text13 thq-body-small">
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
          .testimonial171-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial171-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial171-text01 {
            text-align: center;
          }
          .testimonial171-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial171-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text04 {
            text-align: left;
          }
          .testimonial171-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial171-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text07 {
            text-align: left;
          }
          .testimonial171-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial171-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text10 {
            text-align: left;
          }
          .testimonial171-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial171-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text13 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial171-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial171-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial171-card {
              width: 100%;
            }
            .testimonial171-card1 {
              width: 100%;
            }
            .testimonial171-card2 {
              width: 100%;
            }
            .testimonial171-card3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial171.defaultProps = {
  author1Src:
    'https://images.unsplash.com/photo-1632324343640-86af9827dbeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: 'Nature Enthusiast',
  author2Src:
    'https://images.unsplash.com/photo-1591973669966-52d2534d9087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    "The discussion forums on this website have connected me with like-minded individuals who are passionate about making a difference. It's a great platform for sharing ideas and staying informed.",
  author1Alt: 'Image of Emily Green',
  heading1: 'Testimonials',
  author3Name: 'Sarah Lee',
  content1:
    'I have been using this website for months now, and it has truly helped me understand my impact on the environment. The tools provided are easy to use and informative.',
  review3:
    'I love how this website combines scientific research with practical tips for reducing carbon footprint. It has motivated me to make positive changes in my daily life.',
  review4:
    'As a student studying environmental science, this website has been a valuable resource for staying updated on the latest news and research in the field. I highly recommend it.',
  review1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author1Position: 'Environmental Scientist',
  author4Name: 'Michael Smith',
  author3Src:
    'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Michael Smith',
  author1Name: 'Emily Green',
  author4Src:
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxOTg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Sarah Lee',
  author2Name: 'Alex Johnson',
  author2Position: 'Climate Activist',
  author4Position: 'Student',
  author2Alt: 'Image of Alex Johnson',
}

Testimonial171.propTypes = {
  author1Src: PropTypes.string,
  author3Position: PropTypes.string,
  author2Src: PropTypes.string,
  review2: PropTypes.string,
  author1Alt: PropTypes.string,
  heading1: PropTypes.string,
  author3Name: PropTypes.string,
  content1: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
  review1: PropTypes.string,
  author1Position: PropTypes.string,
  author4Name: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author4Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author2Position: PropTypes.string,
  author4Position: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial171
