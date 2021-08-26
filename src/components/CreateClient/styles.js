import styled from 'styled-components'

export const Container = styled.div`
    width: 85%;

    margin: 0 auto;

    h1 {
        text-align: center;
        font-size: 2.2rem;

        margin-top: 45px;
    }

    form {
        display: flex;
        flex-direction: column;

        width: 85%;
        padding: 15px 20px;

        margin: 0 auto;
        margin-top: 4.375rem;

        border-radius: 15px;

        background: var(--shape-color);

        label {
            display: block;

            padding-left: 15px;
            margin-bottom: 5px;

            font-size: 1.2rem;
        }

        input {
            background: var(--background);

            border: 0;
            border-radius: 15px;
            outline: 0;

            height: 40px;

            font-size: 1rem;

            padding-left: 15px;

            &:focus{
                border-radius: 15px 15px 0 0;
                border-bottom: 2px solid var(--navbar);
            }
        }

        button {
            border: 0;
            outline: 0;
            border-radius: 15px;

            background: var(--navbar);
            color: white;

            font-size: 1.4rem;

            padding: 10px 15px;
            margin: 0 auto;
            margin-top: 20px;

            width: 15.625rem;

            transition: transform 0.1s;

            &:hover{
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(4px);
            }
        }
    }

    .form-name {
        input {
            width: 100%;
        }
    }

    .form-rest {
        display: flex;
        justify-content: space-between;

        margin-top: 15px;

        input {
            width: 100%;
        }
    }

    .empty-fields {
        input {
            border-radius: 15px 15px 0 0;
            border-bottom: 1px solid red
        }
    }

    @media (max-width: 860px) {
        .form-rest {
            flex-direction: column;

            label + input {
                margin-bottom: 15px;
            }
        }
    }

`