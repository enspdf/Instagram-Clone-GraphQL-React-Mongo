import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { graphql } from 'react-apollo';

import queries from '../utils/queries';

import Signin from './login/Singin';
import Signup from './login/Signup';
// import LostPassword from './login/LostPassword';

const styles = {
    grid: {
        height: '100%',
        width: '900px',
        margin: '0 auto'
    },
    box: {
        backgroundColor: 'white',
        border: '1px solid #E6E6E6',
        textAlign: 'center',
        marginBottom: '1em',
        padding: '1em'
    }
};

class Login extends React.Component {
    state = {
        showLogin: true,
        showRegister: false,
        showLostPassword: false,
        argsSignup: {},
        errorSignup: []
    };

    showRegister = (ev) => {
        ev.preventDefault();
        this.setState({ showLogin: false, showRegister: true, showLostPassword: false });
    };

    showLogin = (ev) => {
        ev.preventDefault();
        this.setState({ showLogin: true, showRegister: false, showLostPassword: false });
    };

    handleLogin = (ev, args) => {
        console.log(args);
    };

    handleRegister = async (ev, args) => {
        const response = await this.props.mutate({
            variables: args
        });

        const { errors, success } = response.data.createUser;
        if (!success) {
            this.setState({ errorSignup: errors });
        } else {
            this.props.history.push("/");
        }
    };
    
    handleChange = (ev, input) => {
        const argsSignup = this.state.argsSignup;
        argsSignup[input.name] = input.value;
        this.setState({ argsSignup });
    };

    render () {
        // showLostPassword
        const { showLogin, showRegister, argsSignup, errorSignup } = this.state;

        return (
            <Grid columns={2} centered verticalAlign="middle" style={styles.grid}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src="images/phone.png" fluid />
                    </Grid.Column>
                    <Grid.Column>
                        { showLogin && <Signin styles={styles} handleClick={this.showRegister} handleSubmit={this.handleLogin} /> }
                        { showRegister && <Signup styles={styles} handleClick={this.showLogin} handleSubmit={this.handleRegister} handleChange={this.handleChange} args={argsSignup} errors={errorSignup} /> }
                        {/* showLostPassword && <LostPassword styles={styles} /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default graphql(queries.mutation.createUser)(Login);