import { useNavigate } from "react-router-dom"
import { StyledHeader, StyledMain } from "../../styles/dashboard"
import { toast } from "react-toastify"
import { UserContext } from "../../provider/userContext"
import { useContext, useState } from "react"
import { ModalAdd } from "../../components/Modal"
import { ModalUpdate } from "../../components/Modal/UpdateInfoModal"
import { TechContext } from "../../provider/techContext"
import { List } from "../../components/TechList"

export const Dashboard = () => {

    const { accountInfo , logoutButton } = useContext(UserContext)
    const { isOpenAddModal, setIsOpenAddModal, isOpenUpdateModal, setIsOpenUpdateModal } = useContext(TechContext)

    return (
        <>
        {accountInfo && 
        <>
         <StyledHeader>
            <div>
                <h1>Kenzie HUB</h1>
                <button onClick={logoutButton}>Sair</button>
            </div>
        </StyledHeader>
        <StyledMain>
            <div className="containerUser">
                <h2>{accountInfo?.name}</h2>
                <span>{accountInfo?.course_module}</span>
            </div>
            <div className="line"></div>
            <div className="containerHeader">
                <h3> Tecnologias </h3>
                <button className="addButton" onClick={() => {setIsOpenAddModal(true)}}> + </button>
                {isOpenAddModal ? <ModalAdd /> : null}
            </div>
            <div className="containerTech">
                <List />
                {isOpenUpdateModal ? <ModalUpdate /> : null} 
            </div>
        </StyledMain>
        </>}
        </>
    )
}