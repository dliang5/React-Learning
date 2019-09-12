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
        // this would call the hackerrank api to get the thing working here
        return null;
    }
    
    render() {
        return(
            <li>
                <ul>Hello</ul>
            </li>
        );
    }
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
}