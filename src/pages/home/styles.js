import styled from "styled-components";
import starWars from 'assets/star_wars.png'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #000000;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 50px 36px 0 36px;
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

export const Cinema = styled.div`
    width: calc(90vw - 277px);
    min-height: 921px;
    margin-left: -9rem;
    background-image: url(${starWars});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    background-clip: border-box;

    .title {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 0px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        margin-top: 20px;
        margin-left: 12rem;
    }

    .star_wars {
        width: 479px;
        height: 289px;
        position: relative;
        left: 32%;
        top: 5rem;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export const SelectContainer = styled.div`
    width: 736px;
    height: 71px;
    background: #D9D9D9;
    border: 3px solid #676767;
    border-radius: 50px;
    position: relative;
    left: 12rem;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    select {
        width: 92%;
        height: 100%;
        border: none;
        outline: none;
        background-color: inherit;
        border-radius: inherit;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 0px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        color: #B1B1B1;

        optgroup {

        }

        option {
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 0px;
            display: flex;
            align-items: center;
            letter-spacing: 0.1em;
            color: #B1B1B1;
            
        }
    }
`