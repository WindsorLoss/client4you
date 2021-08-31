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

    
    @media (max-width: 860px) {
  
        .nav-list {
            display: flex;
            flex-direction: column;

            align-items: center;

            position: absolute;
            top: 3rem;
            right: 0;

            width: 100vw;
            height: 14%;

            background: var(--navbar);

            transform: translateX(100%);
            transition: transform 0.3s ease-in;

            button {
                margin-bottom: 1rem;

                font-size: 1.3rem;

                &:last-child {
                    margin-left: 0px;
                }

                &:first-child {
                    margin-top: 5px;
                }
            }

            &.active {
                transform: translateX(0);
            }
        }


        .mobile-menu {
            cursor: pointer;
            display: block;

            
            div{
                width: 32px;
                height: 2px;
                
                background: #fff;
                
                margin: 6px;
                
                transition: 0.3s;
            }

            &.active {
                .line1 {
                    transform: rotate(-45deg) translate(-8px, 8px);
                }
                .line2 {
                    opacity: 0;
                }
                .line3 {
                    transform: rotate(45deg) translate(-3px, -5px);
                }
            }
        }


    }
`