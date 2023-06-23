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
    padding: 1rem;
    
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

    .containerHeader {
        max-width: 1340px;
        width: 100%;

        padding: 1rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 1.5rem;

        color: var(--color-grey-0);

        .addButton {

            background: var(--color-grey-3);
            color: #FFFFFF;
            font-size: 2rem;

            padding: 0 0.5rem;

            display: flex;
            align-items: center;
        }


    }

    .containerTech {

        max-width: 1310px;
        width: 100%;
        margin: 0 auto;

        background: var(--color-grey-2);
        border-radius: 0.375rem;
        padding: 0.7rem;

        ul {
            padding: 0.75rem;
            display: flex;
            justify-content: center;
            flex-direction: column;

            gap: 1rem 0 ;
            
            li {

                width: 100%;
                display: flex;
                justify-content: space-between;

                background:  #121214;
                border-radius: 0.375rem;

                .TechButton {

                    display: flex;
                    justify-content: space-between;

                    width: 100%;
                    background: none;
                    color: #ffffff;
                    padding: 1.5rem;

                    p {

                        font-weight: 700;
                        font-size: 1rem;
                    }

                    span {

                        color: var(--color-grey-1);
                        font-weight: 700;
                        font-size: 1rem;
                    }
                }
            }
        }
    }

`