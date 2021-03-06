import styled from 'styled-components';

const BtnBotcamp = styled.button.attrs({
    children: props => props.content
})`
    color: #fff;
    width: 280px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
    background-color: #ee3e25;
    text-transform: uppercase;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
`;

export default BtnBotcamp;