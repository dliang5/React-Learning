import React from 'react'
import { fetchMainPosts } from './api'
import PropTypes from 'prop-types'

export default class Posts extends React.Component {

    state = {
        posts: null,
        error: null,
        loading: true,
    }

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

    isLoading = () => {
        console.log("this is null or not?", this.state.posts)
        return this.state.posts == null        
    }
    
    render() {

        return(
            <React.Fragment>
                <li>
                    <ul>Hello</ul>
                </li>

                {this.isLoading() && <p>LOADING</p>}
                
                {this.state.posts && 
                    
                    (this.state.posts).map((postInfo) => (
                        <li key={postInfo.id} className='post'>
                            <h2>{postInfo.url}</h2>
                            <span>by - {postInfo.by} </span>
                            <span>on - {postInfo.time}</span>
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