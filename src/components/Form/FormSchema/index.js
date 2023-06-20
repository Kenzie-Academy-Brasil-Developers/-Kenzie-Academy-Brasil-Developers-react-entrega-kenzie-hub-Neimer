import { z } from "zod"

export const formSchema = z.object({

    email: z.string()
        .min(1, "Este campo é obrigatório")
        .email("Forneça um e-mail válido."),
    
    password: z.string()
        .min(8, "A senha precisa conter pelo menos 8 caracteres")
        .regex(/(?=.*?[A-Z])/, "A senha precisa conter uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "A senha precisa conter uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "A senha precisa conter um número")
        .regex(/(?=.*[$*&!@#])/, "A senha precisa contar um caractere especial "),
    
    confirmPassword: z.string()
    .min(1, "Confirmar senha é obrigatório"),
    
    name: z.string()
    .min(3, "Este campo é obrigatório e precisa conter pelo menos 3 caracteres"),
    
    bio: z.string()
    .min(10, "Este campo é obrigatório"),

    contact: z.string()
    .min(1, "Este campo é obrigatorio, insira qualquer meio de contao"),
    
    course_module: z.string()
    .min(1, "Selecione pelo menos uma das opções"),

}).refine(({password, confirmPassword}) => confirmPassword === password, {
    message: "A confirmação de senha precisa corresponder",
    path:  ["confirmPassword"],
}) 