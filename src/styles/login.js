import styled from "styled-components";

export const LoginStyled = styled.div`

    max-width: 26rem;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction:column;
    
    padding: 1rem;

    margin: 4rem auto;

    h1 {
        margin-bottom: 5rem;
        color:var(--color-primary) ;
    }

    .Form {
        border-radius: 6px;

        background: var(--color-grey-3);
        padding: 2rem;
        width: 100%;
       
        
        form {
       
            display: flex;
            flex-direction: column;
            
            
            h3  {
    
                color: var(--color-grey-0);
                margin: 0 auto;
                padding: 2rem;
    
            }

            label {

                padding: 0.5rem;
                color: var(--color-grey-0);
                font-size: 0.75rem;
                font-weight: 400;
            }

            input {
                padding: 1rem;

                outline: 1.2px solid var(--color-grey-0);
                background: var(--color-grey-2);
                color: var(--color-grey-0);
                width: 100%;

                font-size: 1rem;
                font-weight: 400;

                border-radius: 6px;
            }

            button {

                padding: 1rem;
                margin-top: 1.6rem;
                border-radius: 6px;

                color: var(--color-grey-0);

                background-color: var(--color-grey-1);
                
            }

            button:disabled {

                background-color: var(--color-primary-negative);
                cursor: wait;
            }

            button:hover{

                background-color: var(--color-focus);
            }

            .registerBtn {


                button {

                    max-width: 368px;
                    width: 100%;
                }
            }

            span {

                font-weight: 600;
                color: var(--color-grey-1);
                font-size: 0.75rem;

                display: flex;
                justify-content: center;

                margin-top: 2rem;
            }
        }
    }

    @media (max-width: 480px) {

       
    }

`