import React from 'react';
import { Divider, Form, Button, Icon, Message } from 'semantic-ui-react';
import _find from 'lodash/find';

export default ({ styles, handleClick, handleSubmit, handleChange, args, errors }) => {
    return (
        <div>
            <div style={styles.box}>
                <img src="images/logo.png" alt="logo" />
                <Form onSubmit={ (ev) => handleSubmit(ev, args) }>
                    <Form.Field>
                        <Form.Input name="email" onChange={handleChange} placeholder="email o nombre de usuario" icon={ !errors.length ? null : _find(errors, { path: 'email' }) ? <Icon name="remove circle outline" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="password" onChange={handleChange} type="password" placeholder="Password" icon={ !errors.length ? null : _find(errors, { path: 'password' }) ? <Icon name="remove circle outline" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Button type="submit" disabled={!args.email || !args.password} primary fluid>Iniciar Sesión</Button>
                    <Divider horizontal> O </Divider>
                    <Button color="facebook">
                        <Icon name="facebook" /> Iniciar sesión con facebook
                    </Button>
                    {
                        errors.length ? <Message negative header="Los siguientes errores:" list={errors.map(error=>`[${error.path}] ${error.message}`)} /> : null
                    }
                </Form>
            </div>
            <div style={styles.box}>
                ¿No tienes una cuenta? <a href="" onClick={handleClick}>Regístrate</a>
            </div>
        </div>
    )
};