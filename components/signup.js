import React from 'react'

import PropTypes from 'prop-types'

const Signup = (props) => {
  return (
    <>
      <div className={`signup-container ${props.rootClassName} `}></div>
      <style jsx>
        {`
          .signup-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

Signup.defaultProps = {
  rootClassName: '',
}

Signup.propTypes = {
  rootClassName: PropTypes.string,
}

export default Signup
