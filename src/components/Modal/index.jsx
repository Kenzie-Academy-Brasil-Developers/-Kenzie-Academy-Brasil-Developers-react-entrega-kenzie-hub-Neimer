import { StyledModalAdd } from './style';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechContext } from '../../provider/techContext';

export const ModalAdd = () => {
    
    const { register, handleSubmit, reset } = useForm()

    const { addTech, setIsOpenAddModal } = useContext(TechContext)

    const closeModal = () => {

        setIsOpenAddModal(false)
    }

    const handleTechList = async (techInformation) => {

        await addTech(techInformation)
        closeModal()
        reset()
    
    }

    return (
        <StyledModalAdd className='ModalBackground'>
            <div className='ModalBody'>
                <div className='ModalHeader'>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={closeModal}> X </button>
                </div>
                <form onSubmit={handleSubmit(handleTechList)} className='ModalForm'>
                    <Input label="Nome" type="text" {...register("title")}/>
                    <label>Selecione o seu Nivel</label>
                    <select {...register("status")}>
                        <option >Iniciante</option>
                        <option >Intermediário</option>
                        <option >Avançado</option>
                    </select>
                    <div className='ModalFooter'>
                        <button>Cadastrar Tech</button>
                    </div>
                </form>
            </div>
        </StyledModalAdd>
    )
}