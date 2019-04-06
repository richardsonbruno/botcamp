import React from 'react';
import { Link } from 'react-router-dom';

import BgBotcamp from '../../components/BgBotcamp';
import HeaderWrapper from '../../components/HeaderWrapper';
import LogoBotcamp from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import InputComponent from '../../components/InputBotcamp';
import { MicPhone, Attach } from '../../components/ButtonsBotcamp';
import FooterWrapper from '../../components/FooterWrapper';

const Chat = () => (
    <BgBotcamp>
        <HeaderWrapper>
            <LogoBotcamp small />

            <Link to="/">
                <LogoutBotcamp />
            </Link>
        </HeaderWrapper>

        <FooterWrapper>
            <InputComponent />
            <Attach />
            <MicPhone />
        </FooterWrapper>
    </BgBotcamp>
);

export default Chat;