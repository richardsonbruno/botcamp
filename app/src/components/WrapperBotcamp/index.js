import styled from 'styled-components';

import bgBotcamp from '../../img/ecossistema-background.png';

const WrapperBotcamp = styled.main`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding-top: 120px;
    padding-bottom: 80px;
    box-sizing: border-box;

    background: url(${ bgBotcamp });
    height: 100vh;
    width: 100vw;
`;

export default WrapperBotcamp;