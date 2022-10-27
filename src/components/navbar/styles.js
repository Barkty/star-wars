import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 79px;
    padding: 0 3%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 3px solid #191C1F;
`

export const NavbarList = styled.ul`
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 991px){
        display: none;
    }
`

export const NavbarItem = styled.li`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 0px;
    display: flex;
    align-items: center;
    
    a {
        color: #EBEBEB;
        text-decoration: none;
    }
`

export const NavbarLogo = styled.div`
    width: 131px;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`