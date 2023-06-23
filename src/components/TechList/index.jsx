import { useContext } from "react"
import { TechContext } from "../../provider/techContext"

export const List = () => {

    const { technology, setTechnologyId, setTechnologyTitle, setIsOpenUpdateModal } = useContext(TechContext)

    return (

        <ul>
           {technology.map((currentItem) => {   
            
                return (
                <li key={currentItem.id}>
                    <button className="TechButton" onClick={() => {setIsOpenUpdateModal(true), setTechnologyId(currentItem.id), setTechnologyTitle(currentItem.title)}}>
                        <p>{currentItem.title}</p>
                        <span>{currentItem.status}</span>
                    </button >
                </li>
                )
           })} 
        </ul>
    )
}