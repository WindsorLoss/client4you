import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        font-family: Arial, Helvetica, sans-serif;

        --background: #F0F2F5;
        --shape-color: #FFF;
        --navbar: #7E51DE;
        --button-hover: #9461FF;     
        --table-header: #b9b9b9;

    }

    @media (max-width: 860px){
        :root {
            font-size: 12px;
        }

        body {
            overflow-x: hidden;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background: var(--background);
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;

        &:disabled {
            cursor: default;
        }

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }


    /* ------------------------- CSS RESET ------------------------- */
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`

