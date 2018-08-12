import React from 'react'
import PropTypes from 'prop-types'
import { FaClock as Clock } from 'react-icons/fa'

const Date = ({ publishDate, className = `postIcon` }) => (
  <div className={className}>
    <span>
      <Clock size={14} />
      {` `}
      {publishDate}
    </span>
  </div>
)

Date.propTypes = {
  publishDate: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Date
