import React, { Component } from 'react';
import './App.css';

import WrapperBotcamp from './components/WrapperBotcamp';
import LogoBotcamp from './components/LogoBotcamp';
import BtnBotcamp from './components/BtnBotcamp';

class App extends Component {
    render(){
        return (
            <WrapperBotcamp>
                <LogoBotcamp />
                <BtnBotcamp>Entrar</BtnBotcamp>
            </WrapperBotcamp>
        );
    }
};

export default App;