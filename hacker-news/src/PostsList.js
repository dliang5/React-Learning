import React from 'react'
import PropTypes from 'prop-types'
import PostTitle from './PostTitle'
// this is how the list of main potss of either top or new are created 
// TODO: for the next step, I should try to work on creating the link information for 
// both the title, comments, and author name.
export default function PostsList ({ posts }) {
  if (posts.length === 0){
    return (
      <p>The user hasn't posted yet</p> 
    )
  }

  return (
    
    posts.map((postInfo) => (
        <li key={postInfo.id} className='post'>
            {/* <h4 className='link'>{postInfo.title}</h4> */}
            <PostTitle url={postInfo.url} title={postInfo.title} id={postInfo.id} />
            <span>by {postInfo.by} </span>
            <span>on {new Date(postInfo.time).toUTCString()} </span>
            <span>with {postInfo.descendants} comments</span>
        </li>
    ))
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}