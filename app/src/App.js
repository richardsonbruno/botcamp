import React from 'react';
import './App.css';

import WrapperBotcamp from './components/WrapperBotcamp';
import LogoBotcamp from './components/LogoBotcamp';
import BtnBotcamp from './components/BtnBotcamp';

class App extends React.Component {
    render(){
        return (
            <WrapperBotcamp>
                <LogoBotcamp />
                <BtnBotcamp content="Entrar" />
            </WrapperBotcamp>
        );
    }
};

export default App;