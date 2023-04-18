import { useEffect,useState } from "react";
import { euroFormater } from "../helpers";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'

const BudgetController = ({budget, spends,
    setBudget, setSpends, setIsValidBudget}) => {
    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = spends.reduce(
            (total, spend) => spend.quantity + total, 0
        )
        const totalAvailable = budget - totalSpent
        
        const newPercentage = (((
            budget - totalAvailable) / budget) * 100).toFixed(2)

        setAvailable(totalAvailable)
        setSpent(totalSpent)
        setTimeout(()=>{
            setPercentage(newPercentage)
        },1000)
    }, [spends])

    const handleResetApp = () => {
        if(confirm('Estas seguro de resetear la app?')) {
            setSpends([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }
    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor:  percentage > 100 ? '#DC2626' :'#3B82F6',
                })}
                value={percentage}
                text={`${percentage}% gastado`}>

            </CircularProgressbar>
        </div>
        <div className="contenido-presupuesto">
            <button className="reset-app"
                onClick={handleResetApp}>
                Resetear la app
            </button>
            <p>
                <span>Presupuesto: </span>{euroFormater(budget)}
            </p>
            <p className={`${available < 0 ? 'negativo' : 0}`}>
                <span>Gastado: </span>{euroFormater(spent)}
            </p>
            <p>
                <span>Disponible: </span>{euroFormater(available)}
            </p>
        </div>
    </div>
  )
}

export default BudgetController