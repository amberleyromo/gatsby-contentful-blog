import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
