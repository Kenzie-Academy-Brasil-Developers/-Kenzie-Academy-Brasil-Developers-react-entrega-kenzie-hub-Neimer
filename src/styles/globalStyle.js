import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    :root {
        --color-primary: #ff577fff;
        --color-focus: #ff427fff;
        --color-primary-negative: #59323fff;
        --color-grey-4: #121214ff;
        --color-grey-3: #212529ff;
        --color-grey-2: #343b41ff;
        --color-grey-1: #868e96ff;
        --color-grey-0: #f8f9faff;
        --color-sucess: #3fe864ff;
        --color-negative: #e83f5bff;
    }

    body {
        width: 100vw;

        font-family: 'Inter', sans-serif;
        line-height: 150%;
    }

    input, button, label {

        font-family: 'Inter', sans-serif;
    }

    button {

        cursor: pointer;
    }

    body{

        background:var(--color-grey-4);
    }

    fieldset{
        display: flex;
        flex-direction: column;
        outline: 0;
        border: 0;
    }
`