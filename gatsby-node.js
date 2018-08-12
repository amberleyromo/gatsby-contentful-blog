/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require(`lodash`)
 const Promise = require(`bluebird`)
 const path = require(`path`)
 const slash = require(`slash`)

 // Implement the Gatsby API “createPages”. This is
 // called after the Gatsby bootstrap is finished so you have
 // access to any information necessary to programmatically
 // create pages.
 // Will create pages for Wordpress pages (route : /{slug})
 // Will create pages for Wordpress posts (route : /post/{slug})
 exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {
		// The “graphql” function allows us to run arbitrary
		// queries against the local Wordpress graphql schema. Think of
		// it like the site has a built-in database constructed
		// from the fetched data that you can run queries against.

		// ==== POSTS (WORDPRESS NATIVE AND ACF) ====
		graphql(
			`
				{
					allContentfulBlogPost {
						edges {
							node {
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
					}
				}
			`
		).then(result => {
			if (result.errors) {
				console.log(result.errors)
				reject(result.errors)
			}

			const postTemplate = path.resolve(`./src/templates/post.js`)
			// We want to create a detailed page for each
			// post node. We'll just use the Wordpress Slug for the slug.
			// The Post ID is prefixed with 'POST_'
			const posts = result.data.allContentfulBlogPost.edges;
			_.each(posts, (edge, i) => {
				var prev = posts[i - 1] ? posts[i - 1].node.id : null;
				var next = posts[i + 1] ? posts[i + 1].node.id : null;
				createPage({
				path: edge.node.id,
				component: slash(postTemplate),
				context: {
					id: edge.node.id,
					prevPostId: prev,
					nextPostId: next
				},
				})
			})
			resolve()
		})
	// ==== END POSTS ====
	})
 }