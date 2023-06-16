import { useNavigate } from "react-router-dom"
import { StyledHeader, StyledMain } from "../../styles/dashboard"
import { toast } from "react-toastify"

export const Dashboard = ({accountInfo, setAccountInfo}) => {

    const navigate = useNavigate()

    const logoutButton = () => {
        // notify("Deslogado com sucesso")
        
        toast.warning("Deslogado com sucesso")

        setTimeout(() => {
            
            localStorage.removeItem("@USERID")
            localStorage.removeItem("@TOKEN")
            navigate("/")
            setAccountInfo({})
        }, "1000")

    }

    return (
        <>
        <StyledHeader>
            <div>
                <h1>Kenzie HUB</h1>
                <button onClick={logoutButton}>Sair</button>
            </div>
        </StyledHeader>
        <StyledMain>
            <div className="containerUser">
                <h2>{accountInfo.user.name}</h2>
                <span>{accountInfo.user.course_module}</span>
            </div>
            <div className="line"></div>
            <div className="containerUserInfo">
                <h3>Que pena! Estamos em desenvolvimento! </h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </StyledMain>
        </>
    )
}