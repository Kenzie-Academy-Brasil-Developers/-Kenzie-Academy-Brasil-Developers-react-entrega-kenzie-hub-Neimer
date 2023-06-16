import styled from "styled-components";

export const StyledHeader =styled.header `

    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--color-grey-3);

    div {

        max-width: 1380px;
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 2rem;

        h1 {

            color:var(--color-primary) ;
        }

        button{

            background: var(--color-grey-3);
            padding: 0.85rem 30.245px;
            border-radius: 4px;
            color: var(--color-grey-0);
            font-weight: 600;
            font-size: 0.85rem;
        }
    }
`

export const StyledMain = styled.main`


    display: flex;
    flex-direction: column;
    
    h2 {

        font-size: 1.5rem;
        font-weight: 700px;
        color: var(--color-grey-0);

    }

    .containerUser{
        max-width: 1435px;
        width: 100%;
        padding: 4rem;
        margin: 0rem auto;

        display: flex;
        justify-content: space-between;
        align-items:center;
        flex-wrap: wrap;

        color: var(--color-grey-0);
    }

    .line {
        border-bottom: 1px solid var(--color-grey-3);
    }

    .containerUserInfo {
        max-width: 1435px;
        width: 100%;

        padding: 3rem;
        margin: 1rem auto;

        display: flex;
        justify-content: space-evenly;
        flex-direction: column;

        gap: 4rem 0;

        color: var(--color-grey-0);


    }

`