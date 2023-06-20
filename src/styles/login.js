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

            .optionLogin {

    
                margin-top: 1.2rem;
                height: 135px;
                display: flex;
                flex-direction: column;

                gap: 0.5rem 0;
            }

            .registerBtn {

                padding: 0.8rem;
                font-size: 1rem;
                font-weight: 400;
                border-radius: 6px;
                color: var(--color-grey-0);
                background-color: var(--color-grey-1);
                
                display: flex;
                justify-content: center;
                text-decoration: none;
                
            }

            .loginBtn{

                padding: 1rem;
                border-radius: 6px;
                color: var(--color-grey-0);
                background-color: var(--color-focus);
            }

            button:disabled {

                background-color: var(--color-primary-negative);
                cursor: wait;
            }



            .registerBtn:hover{

                background-color: var(--color-focus);
            }

          

            span {

                font-weight: 600;
                color: var(--color-grey-1);
                font-size: 0.75rem;

                display: flex;
                justify-content: center;

            }

            .error {
                color: var(--color-negative);
            }
        }
    }

`