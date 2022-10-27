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
    margin-bottom: ${(props) => (props.size ? '3.4rem' : '0')};
    background-image: url(${starWars});
    background-position: ${(props) => (props.size ? 'right top' : 'right center')};
    background-repeat: no-repeat;
    background-size: ${(props) => (props.size ? 'cover' : 'contain')};
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

    .film {
        width: fit-content;
        height: auto;
        position: relative;
        left: 14.5rem;
        top: -15rem;

        .marquee_card {
            width: 660px;
            height: 386px;
            background: #FFFF00;
            border-radius: 10px;
            padding: 5px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 9px;
            }
        }

        .selected_title {
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 0px;
            text-align: left;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            margin-top: 20px;
        }

        .selected_crawl {
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            margin-top: 20px;
            width: 660px;
        }

        .characters {
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 0px;
            display: flex;
            align-items: center;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            margin-top: 30px;
            margin-bottom: 30px;
            text-transform: uppercase;
        }

        .selected_table {
            height: 400px;
            width: 731px;

            table {
                width: 100%;
                border: none;

                thead, thead tr {
                    width: 100%;
                    height: 39px;
                    background-color: #000;
                }
                th, td {
                    border: none;
                }

                tr {
                    display: flex;
                    flex-direction: row;
                }

                th, td {
                    font-family: 'Open Sans', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 0px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0.02em;
                    color: #FFFFFF;
                }

                .table_head {
                    width: 100px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    padding-left: 15px;
                }

                .table_name {
                    width: 250px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    padding-left: 15px;
                }

                .table_gender {
                    width: 170px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    padding-left: 15px;

                    svg {
                        background: #D9D9D9;
                        border-radius: 50px;
                        width: 27px;
                        height: 27px;
                        color: #000000;
                    }
                }

                tbody tr, tfoot tr {
                    width: 731px;
                    height: 39px;
                    background: #181B20;
                    border-radius: 2px;
                    margin-top: -2px;
                    margin-bottom: 4px;
                }
            }
        }
    }
`

export const SelectContainer = styled.div`
    width: 736px;
    height: auto;
    position: relative;
    left: 12rem;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .select {
        width: 92%;
        height: auto;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 0px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        color: #B1B1B1;

        .select_cta {
            width: 100%;
            height: 71px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #D9D9D9;
            border: 3px solid #676767;
            border-radius: 50px;
            padding: 0 35px;
        }

        .options_wrap {
            width: 85%;
            height: auto;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-around;
            flex-wrap: wrap;
            background: #181B20;
            border-radius: 10px;
            padding: 10px;
            z-index: 2;
            position: absolute;
            top: 5rem;

            .options_list {
                width: 45%;
                height: 93px;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0px;
                gap: 16px;

                & > div {
                    width: 100%;
                    height: 93px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: center;
                }

                .movie_image {
                    width: 42px;
                    height: 42px;
                    background: #D9D9D9;
                    border: 1px solid #0E0F10;
                    border-radius: 100%;
                    margin-right: 1rem;
                    margin-top: 1rem;
                    
                    img {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                    }
                }

                .movie_info {
                    height: 93px;
                    width: 251px;
                    margin-top: 25px;
                    color: #ffffff;

                    &:hover {
                        color: #FFFF00;
                    }

                    .title {
                        font-family: 'Open Sans', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 0px;
                        display: flex;
                        align-items: center;
                        letter-spacing: 0.02em;
                        text-transform: uppercase;
                        color: inherit;
                        margin: 0 0 10px 0;
                    }

                    .info {
                        font-family: 'Open Sans', sans-serif;
                        font-style: italic;
                        font-weight: 300;
                        font-size: 16px;
                        line-height: 22px;
                        display: flex;
                        align-items: center;
                        letter-spacing: 0.02em;
                        color: inherit;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
`

export const OptionPlaceholder = styled.div`
    width: 45%;
    height: 93px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    .movie_info {
        height: 93px;
        width: 251px;
        margin-top: 25px;
        color: #ffffff;
    }

`