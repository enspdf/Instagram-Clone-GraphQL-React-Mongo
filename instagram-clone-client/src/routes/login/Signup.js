import React from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react';

export default ({ styles, handleClick }) => {
    return (
        <div>
            <div style={styles.box}>
                <img src="images/logo.png" />
                <h4>Regístrate para ver fotos y videos de tus amigos.</h4>
                <Form>
                    <Button color="facebook">
                        <Icon name="facebook" /> Iniciar sesión con facebook
                    </Button>
                    <Divider horizontal> O </Divider>
                    <Form.Field>

                    </Form.Field>
                    <Form.Field>

                    </Form.Field>
                    <Form.Field>

                    </Form.Field>
                    <Form.Field>
                        
                    </Form.Field>
                    <Button type="submit" primary fluid>Iniciar sesión</Button>
                </Form>
            </div>
            <div style={styles.box}>
                ¿Tienes una cuenta? <a href="" onClick={handleClick}>Inicia Sesión</a>
            </div>
        </div>
    )
};