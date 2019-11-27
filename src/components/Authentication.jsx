import React, { Component, Fragment } from 'react';
import axios from 'axios';


class Authentication extends Component {
    state = { token: '' }

    componentDidMount() {
        this.authenticate();
    }

    authenticate = async () => {
        const { data } = await axios.post('http://localhost:3000/authenticate', { email: 'example@mail.com', password: '123123123' })
        sessionStorage.setItem('AUTH_TOKEN', `Bearer ${data.auth_token}`);
        this.setState({ token: data.auth_token })
    }

    render() {
        const { token } = this.state;
        return (
            <Fragment key={token}>
                {this.props.children}
            </Fragment>
        )
    }

    componentWillUnmount() {
        sessionStorage.removeItem('AUTH_TOKEN')
    }
}

export default Authentication;