import React, { createContext, Component } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});


export class AuthContextProvider extends Component {
    state = { token: '' }

    componentDidMount() {
        this.authenticate();
    }

    authenticate = async () => {
        const { data } = await axios.post('http://localhost:3000/authenticate', { email: 'example@mail.com', password: '123123123' })
        this.setState({ token: data.auth_token })
    }

    render() {
        const { token } = this.state;
        const { children } = this.props;
        return (
            <AuthContext.Provider value={{ token }}>
                {children}
            </AuthContext.Provider>
        )
    }
};