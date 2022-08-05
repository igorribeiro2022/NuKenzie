import styled from "styled-components"

export const Page = styled.div`
    background: #121212;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    
    section {
        width: 40%;
        max-width: 560px;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            width: 300px;
            margin: auto;
            color: #fff;
            h1 {
                font-weight: 800;
                span {
                    color: #FD377E;
                }
            }

            h2 {
                font-size: 25pt;
                font-weight: 800;
            }

            button {
                width: 50%;
                height: 40px;
                border: none;
                border-radius: 10px;
                background-color: #FD377E;
                color: white;
                font-weight: 700;
                cursor: pointer;

                :hover {
                    transition: .3s;
                    background-color: #c92863;
                }
            }
        }
    }

    aside {
        width: 60%;
        max-width: 840px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 70%;
        }
    }
    
    @media (max-width: 700px) {

        section {
            width: 100vw;
            margin: auto;

            div {
                text-align: center;
                width: 90%;
            }
        }

        aside {
            display: none;
        }
    }
`