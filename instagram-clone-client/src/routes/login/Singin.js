import React from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react';

export default ({ styles, handleClick }) => {
    return (
        <div>
            <div style={styles.box}>
                <img src="images/logo.png" />
                <Form>
                    <Form.Field>
                        <Form.Input placeholder="email o nombre de usuario" icon={<Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="password" placeholder="Password" icon={<Icon name="remove circle outline" color="red" size="large" />} />
                    </Form.Field>
                    <Button type="submit" primary fluid>Iniciar Sesión</Button>
                    <Divider horizontal> O </Divider>
                    <Button color="facebook">
                        <Icon name="facebook" /> Iniciar sesión con facebook
                    </Button>
                </Form>
            </div>
            <div style={styles.box}>
                ¿No tienes una cuenta? <a href="" onClick={handleClick}>Regístrate</a>
            </div>
        </div>
    )
};