import React from 'react';
import { Link } from 'react-router-dom';

import WrapperBotcamp from '../../components/WrapperBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import BtnBotcamp from '../../components/BtnBotcamp'

const Login = () => (
    <WrapperBotcamp>
        <LogoBotcamp />
        <Link to="/chat">
            <BtnBotcamp content="Entrar" />
        </Link>
    </WrapperBotcamp>
);

export default Login;