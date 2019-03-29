import styled from 'styled-components';

import bgBotcamp from '../../img/ecossistema-background.png';

const WrapperBotcamp = styled.main`
    align-items: center;
    background: url(${ bgBotcamp });
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    height: 100vh;
    justify-content: space-between;
    width: 100vw;
`;

export default WrapperBotcamp;