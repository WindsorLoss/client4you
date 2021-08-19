import styled from 'styled-components'

export const Container = styled.div`
    width: 85%;

    margin: 0 auto;

    .title {
        text-align: center;
        font-size: 2.2rem;

        margin-top: 45px;
    }

    .less-brightness {
        color: var(--table-header);
    }

    .search-input {
        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--shape-color);

        border-radius: 15px;

        margin-top: 40px;
        padding-left: 1.3rem;

        input {
            border: 0;
            outline: 0;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            
            width: 100%;
            height: 3rem;

            padding-left: 1.3rem;

            font-size: 1.3rem;
        }
    }

    table {
        width: 100%;
        
        border-collapse: unset;
        border-spacing: 0 0.5rem;

        margin-top: 20px;


        th {
            color: var(--table-header);
            font-size: 1.2rem;

            text-align: left;
            padding: 1rem;
        }


        td {
            background: var(--shape-color);

            font-size: 1.1rem;

            padding: 1rem 1rem 1.3rem 1rem;
            

            &:first-child {
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
            }

            &:last-child {
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
            }

        }

        button {
            border: 0;
            background: var(--shape-color);

            transition: transform 0.1s;

            &:first-child {
                margin-right: 12px;
            }

            &:hover{
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(4px);
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        
        height: 100%;
        width: 100%;

        justify-content: center;
        align-items: center;

        label{
            align-self: flex-start;
            padding-left: 0.6rem;

            font-size: 1.3rem;

            margin-top: 10px;
        }

        input {
            margin-top: 5px;
            padding: 0.8rem;

            width: 100%;

            border-radius: 15px;
            border: 0;
            outline: 0;

            font-size: 1rem;

            background: var(--background);

            &:focus {
                border-bottom: 2px solid var(--navbar);
                border-radius: 15px 15px 0 0;
            }
        }

        button {
            padding: 0.5rem 0.8rem;
            margin-top: 20px;

            font-size: 1.3rem;

            border: 0;
            border-radius: 15px;

            color: white;
            background: var(--navbar);

            transition: all 0.2s;

            &:hover {
                background: var(--button-hover)
            }

            &:active {
                transform: translateY(4px);
            }
        }
    }
`