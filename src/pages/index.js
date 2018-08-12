import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout'
import Date from '../components/date'

const propTypes = {
  data: PropTypes.object.isRequired,
}
class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div className="home">
          <h2 className="visually-hidden">Recent Posts</h2>
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <div className="post-node" key={node.id}>
              <h3>
                <Link to={node.slug}>{node.title}</Link>
              </h3>
              <Date
                className="post-date"
                createdAt={node.createdAt}
                updatedAt={node.updatedAt}
              />
              {/* <div dangerouslySetInnerHTML={{ __html: node.body.childMarkdownRemark.html }} /> */}
              <p>{node.description}</p>
            </div>
          ))}
          <div className="more-posts">
            <p><a href="/posts">More Posts >></a></p>
          </div>
        </div>
      </Layout>
    )
  }
}

Home.propTypes = propTypes

export default Home

export const pageQuery = graphql`
  query homePageQuery {
    allContentfulBlogPost(limit: 3) {
      edges {
        node {
          id
          title
          slug
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
