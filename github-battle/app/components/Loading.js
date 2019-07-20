import React from 'react'
import PropTypes from 'prop-types'
const styles = {
    content: {
        fontSize: '35px',
        postion: 'absolute',
        left: '0',
        right: '0',
        marginTop: '20px',
        textAlign: 'center',

    }
}

export default class Loading extends React.Component {
    constructor() {
        super(props)

        this.state = {
            content: props.text
        }
    }
    componentDidMount () {
        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({ content: text })
                : this.setState(({ content }) => ({ content: content + '.' }))
        }, speed)
    }
    componentWillUnmount () {
        window.clearInterval(this.interval)
    }
    render() {
        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        )
    }
}

Loading.PropTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300,
}