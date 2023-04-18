import React from 'react'
import NewBudget from './NewBudget'
import BudgetController from './BudgetController'

const Header = ({
    budget, setBudget, spends,
    setSpends,isValidBudget, setIsValidBudget
}) => {
  return (
    <header>
        <h1>Planificador de presupuestos</h1>
        { isValidBudget ? (
            <BudgetController budget={budget}
                spends={spends}
                setSpends={setSpends}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget} />
        ): (
            <NewBudget
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />
        )}
    </header>
  )
}

export default Header