import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
`

export const Logo = styled.div`
    width: 131px;
    height: 79px;
    position: relative;
    left: 45%;
    top: 33px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 426px){
        left: 35%;
    }
    
    @media screen and (min-width: 426px) and (max-width: 991px){
        left: 40%;
    }

`