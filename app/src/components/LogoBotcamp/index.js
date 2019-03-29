import styled from 'styled-components';

import logoBotcamp from '../../img/botcamp.png';

const LogoBotcamp = styled.img.attrs({
    src: `${logoBotcamp}`,
    alt: "Logo Botcamp"
})`
    background-size: contain;
    width: 248px;
    height: 39px;
    margin-top: 120px
`;

export default LogoBotcamp;