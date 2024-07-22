import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div className="pricing14-pricing23 thq-section-padding">
        <div className="pricing14-max-width thq-section-max-width">
          <div className="pricing14-section-title">
            <span className="pricing14-text thq-body-small">
              {props.content1}
            </span>
            <div className="pricing14-content">
              <h2 className="pricing14-text01 thq-heading-2">
                {props.heading1}
              </h2>
              <p className="pricing14-text02 thq-body-large">
                {props.content2}
              </p>
            </div>
          </div>
          <div className="pricing14-tabs">
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button01 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button02 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button03 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
          </div>
          {isMonthly && (
            <div className="pricing14-container">
              <div className="pricing14-column thq-card">
                <div className="pricing14-price">
                  <div className="pricing14-price01">
                    <p className="pricing14-text07 thq-body-large">
                      {props.plan1}
                    </p>
                    <h3 className="pricing14-text08 thq-heading-3">
                      {props.plan1Price}
                    </h3>
                    <p className="thq-body-large">{props.plan1Yearly}</p>
                  </div>
                  <div className="pricing14-list">
                    <div className="pricing14-list-item">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1}
                      </span>
                    </div>
                    <div className="pricing14-list-item01">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2}
                      </span>
                    </div>
                    <div className="pricing14-list-item02">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button04 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">{props.plan1Action}</span>
                </button>
              </div>
              <div className="pricing14-column1 thq-card">
                <div className="pricing14-price02">
                  <div className="pricing14-price03">
                    <p className="pricing14-text14 thq-body-large">
                      {props.plan2}
                    </p>
                    <h3 className="pricing14-text15 thq-heading-3">
                      {props.plan2Price}
                    </h3>
                    <p className="thq-body-large">{props.plan2Yearly}</p>
                  </div>
                  <div className="pricing14-list1">
                    <div className="pricing14-list-item03">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1}
                      </span>
                    </div>
                    <div className="pricing14-list-item04">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2}
                      </span>
                    </div>
                    <div className="pricing14-list-item05">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3}
                      </span>
                    </div>
                    <div className="pricing14-list-item06">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button05 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">{props.plan2Action}</span>
                </button>
              </div>
              <div className="pricing14-column2 thq-card">
                <div className="pricing14-price04">
                  <div className="pricing14-price05">
                    <p className="pricing14-text22 thq-body-large">
                      {props.plan3}
                    </p>
                    <h3 className="pricing14-text23 thq-heading-3">
                      {props.plan3Price}
                    </h3>
                    <p className="thq-body-large">{props.plan3Yearly}</p>
                  </div>
                  <div className="pricing14-list2">
                    <div className="pricing14-list-item07">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1}
                      </span>
                    </div>
                    <div className="pricing14-list-item08">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2}
                      </span>
                    </div>
                    <div className="pricing14-list-item09">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3}
                      </span>
                    </div>
                    <div className="pricing14-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4}
                      </span>
                    </div>
                    <div className="pricing14-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button06 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">{props.plan3Action}</span>
                </button>
              </div>
            </div>
          )}
          {!isMonthly && (
            <div className="pricing14-container1">
              <div className="pricing14-column3 thq-card">
                <div className="pricing14-price06">
                  <div className="pricing14-price07">
                    <span className="pricing14-text31 thq-body-large">
                      {props.plan11}
                    </span>
                    <h3 className="pricing14-text32 thq-heading-3">
                      {props.plan1Price1}
                    </h3>
                    <span className="thq-body-large">{props.plan1Yearly1}</span>
                  </div>
                  <div className="pricing14-list3">
                    <div className="pricing14-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11}
                      </span>
                    </div>
                    <div className="pricing14-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21}
                      </span>
                    </div>
                    <div className="pricing14-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button07 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">{props.plan1Action1}</span>
                </button>
              </div>
              <div className="pricing14-column4 thq-card">
                <div className="pricing14-price08">
                  <div className="pricing14-price09">
                    <span className="pricing14-text38 thq-body-large">
                      {props.plan21}
                    </span>
                    <h3 className="pricing14-text39 thq-heading-3">
                      {props.plan2Price1}
                    </h3>
                    <span className="thq-body-large">{props.plan2Yearly1}</span>
                  </div>
                  <div className="pricing14-list4">
                    <div className="pricing14-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11}
                      </span>
                    </div>
                    <div className="pricing14-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21}
                      </span>
                    </div>
                    <div className="pricing14-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31}
                      </span>
                    </div>
                    <div className="pricing14-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button08 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">{props.plan2Action1}</span>
                </button>
              </div>
              <div className="pricing14-column5 thq-card">
                <div className="pricing14-price10">
                  <div className="pricing14-price11">
                    <span className="pricing14-text46 thq-body-large">
                      {props.plan31}
                    </span>
                    <h3 className="pricing14-text47 thq-heading-3">
                      {props.plan3Price1}
                    </h3>
                    <span className="thq-body-large">{props.plan3Yearly1}</span>
                  </div>
                  <div className="pricing14-list5">
                    <div className="pricing14-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11}
                      </span>
                    </div>
                    <div className="pricing14-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21}
                      </span>
                    </div>
                    <div className="pricing14-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31}
                      </span>
                    </div>
                    <div className="pricing14-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature41}
                      </span>
                    </div>
                    <div className="pricing14-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature51}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button09 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">{props.plan3Action1}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing14-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-text {
            text-align: center;
          }
          .pricing14-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text01 {
            text-align: center;
          }
          .pricing14-text02 {
            text-align: center;
          }
          .pricing14-tabs {
            display: flex;
            align-items: flex-start;
          }
          .pricing14-button {
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button01 {
            gap: var(--dl-space-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button02 {
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .pricing14-button03 {
            gap: var(--dl-space-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .pricing14-container {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price01 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text07 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text08 {
            font-size: 48px;
          }
          .pricing14-list {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item01 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button04 {
            width: 100%;
          }
          .pricing14-column1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price02 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price03 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text14 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text15 {
            font-size: 48px;
          }
          .pricing14-list1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button05 {
            width: 100%;
          }
          .pricing14-column2 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price04 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price05 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text23 {
            font-size: 48px;
          }
          .pricing14-list2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item09 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button06 {
            width: 100%;
          }
          .pricing14-container1 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column3 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price06 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price07 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text31 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text32 {
            font-size: 48px;
          }
          .pricing14-list3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button07 {
            width: 100%;
          }
          .pricing14-column4 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price08 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price09 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text38 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text39 {
            font-size: 48px;
          }
          .pricing14-list4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button08 {
            width: 100%;
          }
          .pricing14-column5 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price10 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price11 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text46 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text47 {
            font-size: 48px;
          }
          .pricing14-list5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item21 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item22 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item23 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button09 {
            width: 100%;
          }
          @media (max-width: 991px) {
            .pricing14-container {
              flex-direction: column;
            }
            .pricing14-column2 {
              width: 100%;
            }
            .pricing14-container1 {
              flex-direction: column;
            }
            .pricing14-column5 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing14-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Pricing14.defaultProps = {
  plan1Feature2: 'Access to ecosystem health monitoring tools',
  plan1Feature31: 'Feature text goes here',
  heading1: 'Pricing plan',
  plan2Action1: 'Get started',
  plan3Price1: '$499/yr',
  plan2Feature3: 'Engage in research articles',
  plan2Feature31: 'Feature text goes here',
  plan3Feature21: 'Feature text goes here',
  plan21: 'Business plan',
  plan1Feature21: 'Feature text goes here',
  plan31: 'Enterprise plan',
  plan1Feature11: 'Feature text goes here',
  plan3Feature1: 'All features from Plan 2',
  plan2Action: 'Sign up now',
  plan2Feature41: 'Feature text goes here',
  plan1: 'Basic plan',
  plan2Feature11: 'Feature text goes here',
  plan2Feature2: 'Latest news on environmental issues',
  plan1Action1: 'Get started',
  plan2Yearly: '$100/year',
  plan3Yearly: '$150/year',
  plan3Feature4: 'Feature text goes here',
  plan3Price: '$15/month',
  plan3Feature41: 'Feature text goes here',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan3Yearly1: 'or $49 monthly',
  plan11: 'Basic plan',
  plan1Price: '$5/month',
  plan1Yearly1: 'or $20 monthly',
  plan2: 'Business plan',
  plan3Feature51: 'Feature text goes here',
  plan3Action: 'Sign up now',
  plan3Feature3: 'Receive personalized environmental tips',
  plan1Feature3: 'Participate in environmental discussions',
  plan3Feature2: 'Join discussion forums for change empowerment',
  plan2Feature4: 'Feature text goes here',
  plan2Price: '$10/month',
  plan3: 'Enterprise plan',
  plan1Price1: '$200/yr',
  plan1Feature1: 'Track personal carbon footprint',
  plan2Feature1: 'All features from Plan 1',
  plan3Feature31: 'Feature text goes here',
  plan1Action: 'Sign up now',
  plan1Yearly: '$50/year',
  content1: 'Choose the perfect plan for you',
  plan2Feature21: 'Feature text goes here',
  plan3Action1: 'Get started',
  plan3Feature5: 'Feature text goes here',
  plan3Feature11: 'Feature text goes here',
  plan2Yearly1: 'or $29 monthly',
  plan2Price1: '$299/yr',
}

Pricing14.propTypes = {
  plan1Feature2: PropTypes.string,
  plan1Feature31: PropTypes.string,
  heading1: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan21: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan31: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan2Action: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan1: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan3Price: PropTypes.string,
  plan3Feature41: PropTypes.string,
  content2: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan11: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan3Action: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan2Price: PropTypes.string,
  plan3: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan1Action: PropTypes.string,
  plan1Yearly: PropTypes.string,
  content1: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan2Price1: PropTypes.string,
}

export default Pricing14
