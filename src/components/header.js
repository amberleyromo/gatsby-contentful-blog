import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <h2>
      <a href="https://github.com/amberleyromo">Front-end dev</a>,{' '}
      <a href="https://www.instagram.com/cassrabbit/">bunny mama</a>,{' '}
      <a href="https://www.ravelry.com/people/amberleyknits">knit nerd</a>.{' '}
      <a href="https://twitter.com/amberleyjohanna">Sometimes-tweeter</a>.
    </h2>
  </header>
)

export default Header
