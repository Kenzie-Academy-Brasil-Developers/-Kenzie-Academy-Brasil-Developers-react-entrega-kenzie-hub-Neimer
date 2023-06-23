import styled from "styled-components";

export const StyledModalAdd =styled.div`

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
        height: 370px;
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
        justify-content: space-between;
        align-items: center;
        background: var(--color-grey-2);
        padding: 1rem;

        h3 {

            color: #ffffff;
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

            margin-bottom: 1.5rem;
            border-radius: 0.375rem;
            border: 1px solid var(--color-grey-0);
        }

        select {

            border: 1px solid var(--color-grey-0);
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

        button {

            font-weight: 500;
            font-size: 1rem;
            color: #ffffff;
            width: 100%;
            background: var(--color-primary);
            padding: 1rem;
            border-radius: 6px;
        }
    }


`