import { StyledModalUpdate } from './style';
import { Input } from '../../Input';
import { useContext } from 'react';
import { TechContext } from '../../../provider/techContext';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../provider/userContext';

export const ModalUpdate = () => {
    
    const {updateTech, technologyId, technologyTitle, setIsOpenUpdateModal, deleteTech} = useContext(TechContext)

    const {register, handleSubmit } = useForm()


    const closeModal = () => {

        setIsOpenUpdateModal(false)
    }

    const submit = async (status) => {

        await updateTech(technologyId, status)
        closeModal()
    }

    return (
        <StyledModalUpdate className='ModalBackground'>
            <div className='ModalBody'>
                <div className='ModalHeader'>
                    <h3>Detalhes da Tecnologia</h3>
                    <button onClick={closeModal}> X </button>
                </div>
                <form onSubmit={handleSubmit(submit)} className='ModalForm'>
                    <Input label="Nome" placeholder={technologyTitle} disabled={true}/>
                    <label>Selecione o seu Nivel</label>
                    <select {...register("status")}>
                        <option >Iniciante</option>
                        <option >Intermediário</option>
                        <option >Avançado</option>
                    </select>
                    <div className='ModalFooter'>
                        <button type='submit' className='SaveChanges'>Salvar alterações</button>
                        <button type='button' onClick={() => {deleteTech(technologyId), closeModal()}} className='DeleteTech'>Excluir</button>
                    </div>
                </form>
            </div>
        </StyledModalUpdate>
    )
}