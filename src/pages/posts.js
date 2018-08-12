import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Layout, Date } from '../components'

class Posts extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div className="posts">
          <h2 className="visually-hidden">Posts</h2>
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <div className="post-node" key={node.slug}>
              <h3>
                <Link to={node.slug}>{node.title}</Link>
              </h3>
              <Date className="post-date" publishDate={node.date} />
              <div dangerouslySetInnerHTML={{ __html: node.description }} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

Posts.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Posts

export const pageQuery = graphql`
  query postsPageQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
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
    }
  }
`
