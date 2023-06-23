import { z } from "zod"

export const formSchema = z.object({

    email: z.string()
        .nonempty("Campo obrigatorio")
        .email("Email ou senha invalido"),
    
    password: z.string()
        .nonempty("Email ou senha invalido")

})