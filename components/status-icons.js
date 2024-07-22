import React from 'react'

import PropTypes from 'prop-types'

const StatusIcons = (props) => {
  return (
    <>
      <div className={`status-icons-status-icons ${props.rootClassName} `}>
        <img
          alt={props.networkSignalLightAlt}
          src={props.networkSignalLightSrc}
          className="status-icons-network-signal-light"
        />
        <img
          alt={props.wiFiSignalLightAlt}
          src={props.wiFiSignalLightSrc}
          className="status-icons-wi-fi-signal-light"
        />
        <div className="status-icons-battery-light">
          <img
            alt={props.rectangle23Alt}
            src={props.rectangle23Src}
            className="status-icons-rectangle23"
          />
          <img
            alt={props.rectangle21StrokeAlt}
            src={props.rectangle21StrokeSrc}
            className="status-icons-rectangle21-stroke"
          />
          <img
            alt={props.rectangle20Alt}
            src={props.rectangle20Src}
            className="status-icons-rectangle20"
          />
        </div>
      </div>
      <style jsx>
        {`
          .status-icons-status-icons {
            gap: 4px;
            width: 69px;
            display: flex;
            position: relative;
            align-items: center;
          }
          .status-icons-network-signal-light {
            width: 20px;
            height: 14px;
          }
          .status-icons-wi-fi-signal-light {
            width: 16px;
            height: 14px;
          }
          .status-icons-battery-light {
            width: 25px;
            height: 14px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .status-icons-rectangle23 {
            top: 5px;
            left: 24px;
            width: 1px;
            height: 4px;
            position: absolute;
          }
          .status-icons-rectangle21-stroke {
            top: 1px;
            left: 0px;
            width: 23px;
            height: 12px;
            position: absolute;
            box-sizing: content-box;
          }
          .status-icons-rectangle20 {
            top: 3px;
            left: 2px;
            width: 19px;
            height: 8px;
            position: absolute;
            border-radius: 1px;
          }
          .status-icons-root-class-name {
            top: 16px;
            left: 302px;
            right: 0px;
            position: absolute;
          }
          @media (max-width: 479px) {
            .status-icons-status-icons {
              right: 0px;
            }
            .status-icons-root-class-name {
              top: 20px;
              right: 23px;
            }
          }
        `}
      </style>
    </>
  )
}

StatusIcons.defaultProps = {
  networkSignalLightAlt: 'NetworkSignalLightI811',
  rectangle20Alt: 'Rectangle20I811',
  rectangle23Alt: 'Rectangle23I811',
  rectangle20Src: '/external/rectangle20i811-td7-200h.png',
  rectangle23Src: '/external/rectangle23i811-29q.svg',
  wiFiSignalLightAlt: 'WiFiSignalLightI811',
  networkSignalLightSrc: '/external/networksignallighti811-trgb.svg',
  rootClassName: '',
  wiFiSignalLightSrc: '/external/wifisignallighti811-b0y.svg',
  rectangle21StrokeSrc: '/external/rectangle21strokei811-fmpr.svg',
  rectangle21StrokeAlt: 'Rectangle21StrokeI811',
}

StatusIcons.propTypes = {
  networkSignalLightAlt: PropTypes.string,
  rectangle20Alt: PropTypes.string,
  rectangle23Alt: PropTypes.string,
  rectangle20Src: PropTypes.string,
  rectangle23Src: PropTypes.string,
  wiFiSignalLightAlt: PropTypes.string,
  networkSignalLightSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  wiFiSignalLightSrc: PropTypes.string,
  rectangle21StrokeSrc: PropTypes.string,
  rectangle21StrokeAlt: PropTypes.string,
}

export default StatusIcons
