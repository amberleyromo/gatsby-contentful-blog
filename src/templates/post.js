import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Date from '../components/date'
import { graphql, Link} from 'gatsby'

import { rhythm } from '../utils/typography'

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
                    <h1 className="post-title" dangerouslySetInnerHTML={{ __html: post.title }} />
                    <Date
                        className="post-date"
                        createdAt={post.createdAt}
                    />
                </div>
                <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
                <div className="post-nav">
                    {this.renderPostNav()}
                </div>
            </article>
        </Layout>
    )
  }

  renderPostNav() {
    var prev = this.props.pathContext.prevId;
    var next = this.props.pathContext.nextId;

    if (prev && !next) {
      return (<Link to={prev}>previous</Link>);
    }

    if (prev && next) {
      return (<span><Link to={prev}>previous</Link> | <Link to={next}>next</Link></span>)
    }

    if (next && !prev) {
      return (<Link to={next}>next</Link>)
    }

    return;
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
        id
        title
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
