import styled from "styled-components";

export const Registertyled = styled.div`

    max-width: 26rem;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction:column;
    
    padding: 1rem;

    margin: 2rem auto;

    .registerHeader{
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        margin-bottom: 0.7rem;

        h1 {

            color: var(--color-primary);
            font-size: 24px;
        }

        .backBtn {

            background-color: var(--color-grey-2);
            color: var(--color-grey-0);
            border-radius: 8px;
            border: none;
            max-width: 70px;
            width: 100%;
            padding: 0.6rem;

            text-decoration: none;
            
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        border-radius: 6px;

        background: var(--color-grey-3);
        padding: 1.7rem;
        max-width: 420px;
        width: 100%;

        gap: 1.2rem 0;
       

        div{
            
        }

        input {

            padding: 0.8rem;

            border: none;
            background: var(--color-grey-2);
            color: var(--color-grey-0);

            width: 100%;

            font-size: 1rem;
            font-weight: 400;

            border-radius: 6px;
            
        }

        select {

            padding: 1rem;

            border: none;
            background: var(--color-grey-2);
            color: var(--color-grey-0);
            
            font-size: 1rem;
            font-weight: 400;
            border-radius: 6px;
        }

        span, h3 {
            padding: 0.5rem;
            margin: 0 auto;
        }

        h3 {
            color: var(--color-grey-0);
        }

        span {

            color: var(--color-grey-1);
        }

        button {

            padding: 1rem;
            margin-top: 1.6rem;
            border-radius: 6px;
            border: none;
            color: var(--color-grey-0);
            
            font-weight: 500;
            font-size: 16px;

            max-width: 365px;
            width: 100%;


            background-color: var(--color-primary-negative);
        }

        button:hover{

            background-color: var(--color-focus);
        }


    }
    label {

        color: var(--color-grey-0);
        margin-bottom: 0.3rem;
    }

    .error {

        color: red;
        font-size: 0.6rem;
        margin-bottom: 1rem;
    }


    @media  (max-width:495px){

        form {
            margin: 0 0.2rem;
        }
    }
`