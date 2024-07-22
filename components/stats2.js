import React from 'react'

import PropTypes from 'prop-types'

const Stats2 = (props) => {
  return (
    <>
      <div className="stats2-container thq-section-padding">
        <div className="stats2-max-width thq-section-max-width">
          <div className="stats2-container1 thq-flex-column">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-1-1 stats2-image"
            />
          </div>
          <div className="stats2-container2 thq-flex-column">
            <span className="thq-body-small">{props.content1}</span>
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content2}</p>
            <div className="stats2-container3 thq-grid-2">
              <div className="stats2-container4">
                <h2 className="thq-heading-2">{props.stat1}</h2>
                <span className="thq-body-small">{props.stat1Description}</span>
              </div>
              <div className="stats2-container5">
                <h2 className="thq-heading-2">{props.stat2}</h2>
                <span className="thq-body-small">{props.stat2Description}</span>
              </div>
            </div>
            <div className="stats2-container6 thq-grid-2">
              <div className="stats2-container7">
                <h2 className="thq-heading-2">{props.stat3}</h2>
                <span className="thq-body-small">{props.stat3Description}</span>
              </div>
              <div className="stats2-container8">
                <h2 className="thq-heading-2">{props.stat4}</h2>
                <span className="thq-body-small">{props.stat4Description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats2-container {
            width: 100%;
            flex-direction: column;
          }
          .stats2-max-width {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .stats2-container1 {
            max-width: 50%;
          }
          .stats2-container2 {
            align-self: center;
            align-items: flex-start;
            margin-left: auto;
          }
          .stats2-container3 {
            width: 100%;
          }
          .stats2-container4 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container5 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container6 {
            width: 100%;
          }
          .stats2-container7 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container8 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .stats2-max-width {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .stats2-container1 {
              width: 100%;
              max-width: 100%;
            }
            .stats2-container2 {
              align-self: flex-start;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .stats2-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats2.defaultProps = {
  content1: '15 tons of CO2/year',
  stat3Description: 'Monitor the well-being of ecosystems near you',
  image1Alt: 'Carbon Footprint Icon',
  stat4Description: 'Stay updated on the latest environmental developments',
  image1Src:
    'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwMjQyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  stat1Description: 'Measure your impact on the environment',
  heading1: 'Statistics Overview',
  content2: 'Equivalent to driving 40,000 miles in a car',
  stat2Description: 'Track your personal carbon emissions',
  stat2: 'Discussion Forums',
  stat1: 'Carbon Footprint',
  stat3: 'Ecosystem Health Index',
  stat4: 'Environmental News',
}

Stats2.propTypes = {
  content1: PropTypes.string,
  stat3Description: PropTypes.string,
  image1Alt: PropTypes.string,
  stat4Description: PropTypes.string,
  image1Src: PropTypes.string,
  stat1Description: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  stat2Description: PropTypes.string,
  stat2: PropTypes.string,
  stat1: PropTypes.string,
  stat3: PropTypes.string,
  stat4: PropTypes.string,
}

export default Stats2
