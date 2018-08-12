import React from 'react'
import { FaTag as Tag, FaClock as Clock, FaFolderOpen as Open } from 'react-icons/fa';

export default ({ createdAt, className = `postIcon` }) => (
  <div className={className}>
    <span>
      <Clock size={14} />
      {` `}
      {createdAt}
    </span>
  </div>
)