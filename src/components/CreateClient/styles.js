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
        margin-top: 70px;

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

            height: 35px;

            font-size: 1rem;

            padding-left: 15px;
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

            width: 250px;
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

`