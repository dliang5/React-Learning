import React from 'react'
import PropTypes from 'prop-types'

export default function PostTitle ({ url, title, id }) {
  return url ? <a className='link' href={url}>{title}</a>
    : <span>{title}</span>
}

PostTitle.propTypes ={
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}