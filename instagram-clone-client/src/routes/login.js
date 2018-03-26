import React from 'react';
import { Grid } from 'semantic-ui-react';

import Signin from './login/Singin';
import Signup from './login/Signup';
import LostPassword from './login/LostPassword';

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
        showLostPassword: false
    };

    showRegister = (ev) => {
        ev.preventDefault();
        this.setState({ showLogin: false, showRegister: true, showLostPassword: false });
    };

    showLogin = (ev) => {
        ev.preventDefault();
        this.setState({ showLogin: true, showRegister: false, showLostPassword: false });
    };

    render () {
        const { showLogin, showRegister, showLostPassword } = this.state;

        return (
            <Grid columns={2} centered verticalAlign="middle" style={styles.grid}>
                <Grid.Row>
                    <Grid.Column>
                        <img src="images/phone.png" />
                    </Grid.Column>
                    <Grid.Column>
                        { showLogin && <Signin styles={styles} handleClick={this.showRegister} /> }
                        { showRegister && <Signup styles={styles} handleClick={this.showLogin} /> }
                        {/* showLostPassword && <LostPassword styles={styles} /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Login;