import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`


    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
        border: 0;
    }

    ul, ol {

        list-style: none;
    }

    input {

        border: none;
        outline: 0;
    }


`