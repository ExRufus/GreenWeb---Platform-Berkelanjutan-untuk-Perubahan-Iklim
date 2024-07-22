import React from 'react'

import PropTypes from 'prop-types'

const Gallery1 = (props) => {
  return (
    <>
      <div className="gallery1-gallery3 thq-section-padding">
        <div className="gallery1-max-width thq-section-max-width">
          <div className="gallery1-section-title">
            <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
            <span className="gallery1-text1 thq-body-large">
              {props.content1}
            </span>
          </div>
          <div className="gallery1-content">
            <div className="gallery1-container">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container1">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container2">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery1-gallery3 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery1-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-text {
            text-align: center;
          }
          .gallery1-text1 {
            text-align: center;
          }
          .gallery1-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery1-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .gallery1-text1 {
              color: var(--dl-color-theme-neutral-dark);
            }
          }
          @media (max-width: 991px) {
            .gallery1-content {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery1.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Forest ecosystem',
  image2Src:
    'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Ecosystem Health Monitoring',
  image2Alt: 'Coral reef ecosystem',
  image3Alt: 'Arctic ecosystem',
  image1Src:
    'https://images.unsplash.com/photo-1625472603517-1b0dc72846ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Explore stunning images showcasing the beauty of various ecosystems around the world.',
}

Gallery1.propTypes = {
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Gallery1
