import { useState } from "react"

export const Form = ({inputNames}) => {

    const [fields, setFields] = useState({})

    const handleForm = (name) => (event) => {
        setFields({...fields, [name]: event.target.value})
    }

}