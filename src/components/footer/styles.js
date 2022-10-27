import styled from "styled-components";
import starWars from 'assets/star_wars.png'

export const FooterContainer = styled.div`
    width: 100%;
    height: 183px;
    border-top: 3px solid #191C1F;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10px;
    background-image: url(${starWars});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
`

export const FooterList = styled.div`
    height: 123px;
    width: 486px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
`

export const FooterText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 0px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #7C7C7B;
`

export const FooterIcons = styled.div`
    width: 280px;
    height: 35px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`

export const Icon = styled.div`
    width: 35px;
    height: 35px;

    svg {
        width: 100%;
        height: 100%;
        color: #181B20;
    }
`

export const Divider = styled.div`
    width: 30px;
    height: 0px;
    transform: rotate(90deg);
    background-color: #181B20;
    position: relative;
    top: 20px;
`

export const Guide = styled.div`
    width: 74px;
    height: 25px;
    background: #3E4043;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5px;

    p {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 0px;
        text-align: center;
        letter-spacing: 0.09em;
        color: #000000
    }
`