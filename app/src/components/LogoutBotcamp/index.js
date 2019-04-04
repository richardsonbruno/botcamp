import styled from 'styled-components';

import IconLogout from '../../img/iconfinder_logout.svg';

const LogoutBotcamp = styled.button`
    background: url(${IconLogout});
    background-size: contain;
    border: none;
    height: 30px;
    width: 30px;
    padding: 2px;
    cursor: pointer;
`;

export default LogoutBotcamp;