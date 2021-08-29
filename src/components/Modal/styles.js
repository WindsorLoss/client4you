import styled from 'styled-components'

export const ModalBox = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    background: rgba(0, 0, 0, 0.5);

    .container  {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 380px;
        padding: 1rem 0;

        background: var(--shape-color);

        border-radius: 15px;

        .close {
            width: 32px;
            height: 32px;

            left: 41.5%;
            top: -8%;

            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            background: transparent;
            color: gray;

            border: 0;

            &:before, &:after {
                content: ' ';

                position: absolute;
                width: 2.5px;
                height: 24px;

                background: gray;
            } 

            &:before {
                transform: rotate(45deg);
            }

            &:after {
                transform: rotate(-45deg);
            }
        }

        .action-buttons {
            
            height: 44.8px;
            width: 52px;

            font-size: 1.3rem;

            background: var(--navbar);
            color: white;

            border: 0;
            border-radius: 15px;
            outline: 0;

            &:first-child {
                margin-right: 8px;
            }

        }

        .content{
            text-align: center;
            width: 90%;
            height: 70%;
        }
    }

    @media (max-width: 860px) {
        .container {
            width: 280px;
            height: 360px;
        }

        .content {
            font-size: 3rem;
        }
    }
`