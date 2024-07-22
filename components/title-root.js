import React from 'react'

import PropTypes from 'prop-types'

const TitleRoot = (props) => {
  return (
    <>
      <div className="title-root-title-root">
        <h2 className="title-root-text thq-heading-2">{props.heading1}</h2>
        <p className="thq-body-large title-root-text1">
          Already have an account? Sign in
        </p>
      </div>
      <style jsx>
        {`
          .title-root-title-root {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .title-root-text {
            text-align: center;
          }
          @media (max-width: 479px) {
            .title-root-text {
              text-align: center;
            }
            .title-root-text1 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

TitleRoot.defaultProps = {
  heading1: 'Join Us Today!',
}

TitleRoot.propTypes = {
  heading1: PropTypes.string,
}

export default TitleRoot
