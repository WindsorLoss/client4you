import styled from 'styled-components'

export const Container = styled.div`
    height: 3rem;
    
    background: var(--navbar);
    color: white;
    
    nav {
        height: 100%;
        width: 90%;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        strong {
            font-size: 1.5rem;
            font-weight: 600;

            i {
                font-style: italic;
            }
        }

        button{
            border: 0;
            border-radius: 15px;
            outline: 0;
            
            padding: 5px 10px;

            color: white;
            background: transparent;

            font-size: 1rem;

            transition: background 0.3s;


            &:last-child {
                margin-left: 10px;
            }

            &:hover {
                background: var(--button-hover);
            }

            &:active {
                transform: translateY(4px);
            }
        }
    }
`