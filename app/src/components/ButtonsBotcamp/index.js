import styled from 'styled-components';

import IconMicrophone from '../../img/iconfinder_icon-microphone.svg';
import AttachMicrophone from '../../img/iconfinder_attachment.svg';

const MicPhone = styled.button`
    background: url(${IconMicrophone}) no-repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #ee3e25;
    margin-left: 10px;
    cursor: pointer;
`;

const Attach = styled.button`
    background: url(${AttachMicrophone}) no-repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

export {MicPhone, Attach};