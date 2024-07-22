import React from 'react'

import PropTypes from 'prop-types'

const PastedImage = (props) => {
  return (
    <>
      <div className="pasted-image-container">
        <img alt={props.pastedImageAlt} src={props.pastedImageSrc} />
      </div>
      <style jsx>
        {`
          .pasted-image-container {
            display: flex;
            position: relative;
          }
        `}
      </style>
    </>
  )
}

PastedImage.defaultProps = {
  pastedImageSrc: '/external/pastedimage-qa0l-200h.png',
  pastedImageAlt: 'pastedImage',
}

PastedImage.propTypes = {
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default PastedImage
