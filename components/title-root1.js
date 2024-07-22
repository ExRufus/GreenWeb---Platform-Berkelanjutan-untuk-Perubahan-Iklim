import React from 'react'

import PropTypes from 'prop-types'

const TitleRoot1 = (props) => {
  return (
    <>
      <div className={`title-root1-title-root ${props.rootClassName} `}>
        <h2 className="title-root1-text thq-heading-2">{props.heading1}</h2>
      </div>
      <style jsx>
        {`
          .title-root1-title-root {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .title-root1-text {
            text-align: center;
          }

          @media (max-width: 479px) {
            .title-root1-text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

TitleRoot1.defaultProps = {
  heading1: 'Join Us Today!',
  rootClassName: '',
}

TitleRoot1.propTypes = {
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TitleRoot1
