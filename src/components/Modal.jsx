import { useState, useEffect } from 'react'
import closeButton from '../img/cerrar.svg'
import Message from './Message'
import { categories } from "../helpers/index.js";

const Modal = ({
    setModal, animateModal, setAnimateModal, 
    saveSpend, spendEdit, setSpendEdit
}) => {
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if(Object.keys(spendEdit).length > 0) {
            setName(spendEdit.name)
            setQuantity(spendEdit.quantity)
            setCategory(spendEdit.category)
            setDate(spendEdit.date)
            setId(spendEdit.id)
        }
    }, [])
    
    const hideModal = () => {
        setAnimateModal(false)
        setTimeout(() => {setModal(false)}, 500);
        setSpendEdit({})
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([name, quantity, category].includes('') || quantity <= 0) {
            setMessage('Todos los campos son obligatorios')
            setTimeout(() => {setMessage('')}, 2000);
            return;
        }

        saveSpend({name, quantity, category, id, date})
        hideModal()
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={closeButton} 
                alt="Cerrar modal"
                onClick={hideModal} />
        </div>

        <form onSubmit={handleSubmit}
            className={`formulario 
            ${animateModal ? 'animar' : 'cerrar'}`}>
            <legend>{spendEdit.name ? 'Editar gasto' : 'Nuevo gasto'}</legend>
            {message && (<Message messageType="error">{message}</Message>)}

            <div className="campo">
                <label htmlFor="name">
                    Nombre de gasto
                </label>
                <input type="text" id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Añade el campo nombre del gasto' />
            </div>

            <div className="campo">
                <label htmlFor="quantity">
                    cantidad
                </label>
                <input type="text" id="quantity"
                    onChange={e => setQuantity(Number(e.target.value)
                        ? Number(e.target.value) : 0)}
                    placeholder='Añade la cantidad de gasto' />
            </div>

            <div className="campo">
                <label htmlFor="category">
                    Categoría
                </label>
                <select id="category" 
                    value={category}
                    onChange={e => setCategory(e.target.value)}>
                    {
                        categories().map((category, i) => 
                            <option value={i!=0 ? category : ''} key={i}>
                                {category}
                            </option>
                        )
                    }
                </select>
            </div>

            <input type="submit" value={spendEdit.name ? 'Guardar cambio' : 'Añadir gasto'} />
            
        </form>
    </div>
  )
}

export default Modal