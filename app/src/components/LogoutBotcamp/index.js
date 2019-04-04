import styled from 'styled-components';

import IconLogout from '../../img/iconfinder_logout.svg';

const LogoutBotcamp = styled.img.attrs({
    src: IconLogout,
    alt: "Icon Logout"
})`
    height: 30px;
    width: 30px;
    padding: 2px;
    cursor: pointer;
`;

export default LogoutBotcamp;