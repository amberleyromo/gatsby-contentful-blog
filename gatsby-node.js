/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulBlogPost(sort: {fields: [date], order: DESC}) {
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
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/post.js`)
      const posts = result.data.allContentfulBlogPost.edges
      _.each(posts, (edge, i) => {
        var earlier = posts[i + 1] ? posts[i + 1].node.slug : null
        var newer = posts[i - 1] ? posts[i - 1].node.slug : null
        createPage({
          path: edge.node.slug,
          component: slash(postTemplate),
          context: {
            id: edge.node.id,
            newerPostId: newer,
            earlierPostId: earlier,
          },
        })
      })
      resolve()
    })
  })
}
