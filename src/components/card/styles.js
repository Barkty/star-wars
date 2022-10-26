import styled from "styled-components";
import video from 'assets/video.png'

export const ReviewCard = styled.div`
    width: 467px;
    height: 614px;
    background: #181B20;
    border-radius: 30px;
    padding: 46px 26px;
    z-index: 1;
    position: relative;

    .title {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 0px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }

    .video_frame {
        width: 419px;
        height: 341px;
        background: #3A424E;
        border-radius: 30px;
        padding: 8px;
        position: relative;
        top: 4.5rem;

        .video {
            border-radius: 28px;
            width: 100%;
            height: 100%;
            background-image: url(${video});
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            /* padding: 15px; */

            .rating {
                background: #000000;
                border-radius: 10px;
                width: 43px;
                height: 20px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                padding: .2rem;
                margin: 15px 0 0 25px;

                svg {
                    color: #FFFF00;
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                    font-size: 12px;
                }

                .rating_number {
                    font-family: 'Open Sans', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 9px;
                    line-height: 0px;
                    display: flex;
                    align-items: center;
                    color: #FFFFFF;
                }
            }

            .action_container {
                width: 100%;
                height: 141px;
                padding: 0 47px 25px 47px;
                display: flex;
                align-items: flex-end;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 5.71%, #000000 100%);
                border-radius: 0px 0px 25px 25px;

                .actions {
                    width: 100%;
                    height: auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
            }

            .controls {
                width: 100%;
                height: 45px;
                display: flex;
                align-items: flex-start;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 7rem;

                .icon {
                    width: 42px;
                    height: 42px;

                    svg {
                        width: 100%;
                        height: 100%;
                        color:  #C6C6C6;
                        cursor: pointer;
                    }
                }

                .video_icon {
                    width: 31px;
                    height: 31px;
                    border-radius: 100%;
                    cursor: pointer;
                    
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .movie_title {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 13px;
        color: #FFFFFF;
        position: relative;
        top: 6rem;
        left: .6rem;
    }

    .movie_info {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        color: #FFFFFF;
        position: relative;
        top: 7rem;
        left: .6rem;
        width: 347px;
    }
`

export const ButtonFilled = styled.button`
    width: 128px;
    height: 28px;
    background: #FFFF00;
    border-radius: 30px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 0px;
    display: flex;
    align-items: center;
    letter-spacing: 0.09em;
    color: #000000;
    cursor: pointer;
    text-transform: uppercase;
`

export const ButtonOutlined = styled.button`
    width: 128px;
    height: 28px;
    background: #000000;
    border: 2px solid #FFFF00;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 0px;
    letter-spacing: 0.09em;
    color: #FFFFFF;
    cursor: pointer;
    text-transform: uppercase;
`