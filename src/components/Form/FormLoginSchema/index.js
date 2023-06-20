import { z } from "zod"

export const formSchema = z.object({

    email: z.string()
        .nonempty("Campo obrigatorio")
        .email("Forneça um e-mail válido."),
    
    password: z.string()
        .nonempty("Senha inválida")

})