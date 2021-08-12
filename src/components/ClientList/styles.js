import styled from 'styled-components'

export const Container = styled.div`
    width: 85%;

    margin: 0 auto;

    h1 {
        text-align: center;
        font-size: 2.2rem;

        margin-top: 45px;
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

            padding: 1rem;
            padding-bottom: 1.3rem;
            

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
`