import styled from "styled-components";

export const StyledModalUpdate =styled.div`

    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    inset: 0;
    padding: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    .ModalBody {

        max-width: 400px;
        width: 100%;
        height: 360px;
        border-radius: 12px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;

        background-color: var(--color-grey-3);
        
    }

    .ModalHeader{

        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--color-grey-2);
        padding: 1rem;

        h3 {

            color: #ffffff;
            width: 800px;
    
        }

        button {

            background: transparent;
            color: var(--color-grey-1);
    
        }
    }

    .ModalForm{

        padding: 1rem;
        display: flex;
        flex-direction: column;


        label{
            font-weight: 400;
            color: var(--color-grey-0);
            font-size: 0.75rem;

        }

        input {

            background: var(--color-grey-2);
            padding: 1rem;
            color: var(--color-grey-0);
            width: 100%;
            margin-bottom: 1.5rem;
            border-radius: 0.375rem;
        }

        select {

            border-radius: 0.375rem;
            background: var(--color-grey-2);
            padding: 1rem;
            color: var(--color-grey-0);

        }

    }

    .ModalFooter{

        display: flex;
        justify-content: center;
        margin-top: 2rem;

        gap: 1.5rem;

        .SaveChanges {

            font-weight: 500;
            font-size: 1rem;
            color: #ffffff;
            max-width: 14.375rem;
            width: 100%;
            background: var(--color-primary-negative);
            padding: 1rem;
            border-radius: 6px;
        }

        .DeleteTech {

            font-weight: 500;
            font-size: 1rem;
            max-width: 7.1875rem;
            width: 100%;
            color: #ffffff;
            background: var(--color-grey-1);
            border-radius: 6px;
        }
    }
`