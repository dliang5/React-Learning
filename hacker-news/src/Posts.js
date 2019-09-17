import React from 'react'
import { fetchMainPosts } from './api'
import PropTypes from 'prop-types'
import Loading from './Loading'

export default class Posts extends React.Component {

    state = {
        posts: null,
        error: null,
        loading: true,
    }

    // as soon as this component is called, it will handle fetch of "top" for right now
    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        // initially, it would be either top or new that is past 
        // then it calls the api, fetchMainPosts, to get all the data and set them here.
        fetchMainPosts(this.props.type)
            .then((posts) => this.setState({
                posts,
                loading: false,
                error: null
            }))
            .catch(({ message }) => this.setState({
                error: message,
                loading: false
            }))
    }

    
    render() {
        
        // this is default loading screen here.
        if (this.state.loading === true) {
            return <Loading />
        }

        return(
            // React Fragment is required if there is more than one things being returned here
            <React.Fragment>
                <li>
                    <ul>Hello</ul>
                </li>

                {/* this map through all of the post produced from handlefetch() 
                    TODO: make sure to have this converted into a post component i guess once you have the minimal product working.
                */}
                {this.state.posts && 
                    
                    (this.state.posts).map((postInfo) => (
                        <li key={postInfo.id} className='post'>
                            <h4 className='link'>{postInfo.title}</h4>
                            <span>by {postInfo.by} </span>
                            <span>on {new Date(postInfo.time).toUTCString()} </span>
                            <span>with {postInfo.descendants} comments</span>
                        </li>
                    ))
                }
            </React.Fragment>
        )
    }
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
}