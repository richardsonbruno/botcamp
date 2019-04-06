import styled from 'styled-components';

const InputComponent = styled.input.attrs({
    placeholder: 'Diz ai...'
})`
    border: none;
    height: 40px;
    font-size: 18px;
    padding: 0 10px;
    flex: 1;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.33);
    outline: none;
`;

export default InputComponent;