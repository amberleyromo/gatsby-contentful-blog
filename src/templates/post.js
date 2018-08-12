import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Date from '../components/date'
import { graphql, Link } from 'gatsby'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends Component {
  render() {
    const post = this.props.data.contentfulBlogPost

    return (
      <Layout>
        <article>
          <div className="post-intro">
            <h1
              className="post-title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <Date className="post-date" publishDate={post.date} />
          </div>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <div className="post-nav">{this.renderPostNav()}</div>
        </article>
      </Layout>
    )
  }

  renderPostNav() {
    var newer = this.props.pathContext.newerPostId
    var earlier = this.props.pathContext.earlierPostId

    if (newer && !earlier) {
      return <Link to={newer}>newer post</Link>
    }

    if (newer && earlier) {
      return (
        <span>
          <Link to={newer}>newer post</Link> |{' '}
          <Link to={earlier}>earlier post</Link>
        </span>
      )
    }

    if (earlier && !newer) {
      return <Link to={earlier}>earlier post</Link>
    }

    return
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM Do, YYYY")
      createdAt(formatString: "MMMM Do, YYYY")
      updatedAt
      author {
        id
        name
      }
      description
      body {
        childMarkdownRemark {
          html
        }
      }
      contentful_id
    }
  }
`
