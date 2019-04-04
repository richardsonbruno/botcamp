import React from 'react';

import BgBotcamp from '../../components/BgBotcamp';
import HeaderBotcamp from '../../components/HeaderBotcamp';
import LogoBotcamp from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';

const Chat = () => (
    <BgBotcamp>
        <HeaderBotcamp>
            <LogoBotcamp small />
            <LogoutBotcamp />
        </HeaderBotcamp>
    </BgBotcamp>
);

export default Chat;