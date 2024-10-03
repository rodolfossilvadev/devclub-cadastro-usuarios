import styled from "styled-components";

export const Button = styled.button`
    border: ${(props )=> (props.theme === 'primary' ? 'none' : '1px solid #ffffff')};
    background: ${(props )=>
        props.theme === 'primary'
            ? 'linear-gradient(180deg, #03FD05 0%, #000000 100%)'
            : 'transparent'};
    font-size: 16px;
    color: #ffffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 25px;
    transition: 0.8s;

   &:hover{
        scale:  ${(props )=> (props.theme === 'primary' ? '1.2' : '1.1')};
        background:  ${(props )=> (props.theme === 'primary' ? 'linear-gradient(180deg, #03FD05 0%, #000000 100%)'
             : '#ffffff')};
        color:  ${(props )=> (props.theme === 'primary' ? '#ffffff' : 'black')};;
    }
    &:active{
        opacity: 0.5;
    }
`
