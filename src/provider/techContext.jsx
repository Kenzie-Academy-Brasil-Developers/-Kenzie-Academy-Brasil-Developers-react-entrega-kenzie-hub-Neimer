import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    const [technology, setTechs] = useState([])
    const [technologyId, setTechnologyId] = useState(null)
    const [technologyTitle, setTechnologyTitle] = useState(null)
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)

    useEffect(() => {

        const getTechs =  async () => {

            try {
                const token = localStorage.getItem("@TOKEN")
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setTechs(data.techs)

            } catch (error) {
                
            }

        }

        getTechs()

    },[])

    const addTech = async (techInformation) => {
        try {
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.post("/users/techs", techInformation, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setTechs((technology) => [...technology, data])
            
            toast.success("Technologia adicionada")

        } catch (error) {
            toast.error("algo deu errado, tente novamente")
        }
    }
    
    const updateTech = async (techId, status) => {

        try {
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.put(`/users/techs/${techId}`, status, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setTechs(technology.map((tech) => {
                if(tech.id == techId){
                    return data
                }
                return tech
            }))

            toast.success("Technologia Atualizada")
            setIsOpenUpdateModal(false)
        } catch (error) {
            
            toast.error("Algo deu errado, tente novamente")
        }
    }

    const deleteTech = async (techId) => {

        try {
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setIsOpenAddModal(false)
            setTechs((techs) => techs.filter(currentTech => currentTech.id !== techId))

            toast.success("Technologia deletada")

        } catch (error) {
            toast.error("Algo deu errado, tente novamente")
        }
    }

    return(
        <TechContext.Provider value={{technologyTitle, setTechnologyTitle, technologyId, setTechnologyId, updateTech ,addTech, technology, isOpenAddModal, setIsOpenAddModal, isOpenUpdateModal, setIsOpenUpdateModal, deleteTech }}>
            {children}
        </TechContext.Provider>    
    )
}