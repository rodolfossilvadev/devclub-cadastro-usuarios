import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #ffffff;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    margin-top: 30px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: 750px){
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 20px;
    box-shadow: 3px 3px 3px white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 400px;
h3{
    color: #ffffff;
    font-size: 24px;
    text-transform: capitalize;
}

p{
    color: #ffffff;
    font-size: 14px;
    font-weight: 200;
}
`

export const TrashIcon = styled.img`
    cursor: pointer;
    transition: 0.8s;
    padding-left: 30px;

    &:hover{
        scale: 1.3;
    }
    &:active{
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
`