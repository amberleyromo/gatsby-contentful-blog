import React from 'react'
import { FaTag as Tag, FaClock as Clock, FaFolderOpen as Open } from 'react-icons/fa';

import { rhythm } from '../utils/typography'

export default ({ date, className = `postIcon` }) => (
  <div className={className}>
    <span>
      <Clock size={14} />
      {` `}
      {date}
    </span>
  </div>
)

// export const PostDateFragment = graphql`
//   fragment PostDateFrag on ContentfulBlogPost {
//     createdAt(formatString: "MMMM DD, YYYY")
//     updatedAt(formatString: "MMMM DD, YYYY")
//   }
// `

// export const query = graphql`
//   fragment PostDateFrag on ContentfulBlogPost {
//     date(formatString: "MMMM DD, YYYY")
//     tags {
//       name
//     }
//     categories {
//       name
//     }
//   }
// `