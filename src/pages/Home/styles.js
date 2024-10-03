import styled from "styled-components";

export const Container = styled.div`
background-color: #181f36;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
flex-direction: column;
`



export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;

`

export const Title = styled.h2`
color: #ffffff;
text-align: center;
font-size: 40px;
font-weight: 600;
`

export const ContainerInputs = styled.div`
display: flex;
gap: 20px;
`

export const Input = styled.input`
border-radius: 10px;
border: 1px solid aliceblue;
padding: 15px 20px;
width: 100%;
outline: none;
`

export const InputLabel = styled.label`
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;

span{
    color: #ef4f45;
}

`


