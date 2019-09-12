import React from 'react'

export default class Top extends React.Component {

    state = {
        selectedType: 'New',
        stories: {},
        error: null,
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