import { useState } from "react"
import Message from "./Message"

const NewBudget = ({
    budget, setBudget,
    isValidBudget, setIsValidBudget
}) => {
    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault();
        if(validateBudget(budget)) {
            setIsValidBudget(true)
            return;
        }
        setIsValidBudget(false)
    }

    const validateBudget = (value) => {
        if(value <= 0) {
            setMessage('No es un presupuesto valido')
            return false;
        }
        setMessage('')

        return true;
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleBudget}>
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                <input type="text"
                className="nuevo-presupuesto"
                placeholder="Añade tu presupuesto"
                onChange={e => setBudget(Number(e.target.value) 
                    ? Number(e.target.value) : 0)} 
                />
            </div>

            <input type="submit" value="Añadir" />

            {message && <Message messageType="error">{message}</Message>} 
        </form>
    </div>
  )
}

export default NewBudget