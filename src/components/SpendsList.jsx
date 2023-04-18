import { useEffect, useState } from 'react'
import Spend from './Spend'

const SpendsList = ({
  spends, setSpendEdit, deleteSpend,
  filter, filteredSpends, spendsListTitle,
  filteredListTitle}) => {
    
  return (
    <div className='listado-gastos contenedor'>
        {
          filter ? (
            <>
              <h2>{filteredSpends.length ? 'Gastos' : 'No hay gastos en esta categoria aún'}</h2>
              {filteredSpends.map(spend => (
                <Spend
                  setSpendEdit={setSpendEdit}
                  key={spend.id} spend={spend} 
                  deleteSpend={deleteSpend}/>
              ))}
            </>
          ) : (
            <>
              <h2>{spends.length ? 'Gastos' : 'No hay gastos aún'}</h2>
              {spends.map(spend => (
                <Spend
                  setSpendEdit={setSpendEdit}
                  key={spend.id} spend={spend} 
                  deleteSpend={deleteSpend}/>
              ))}
            </>
        )}
    </div>
  )
}

export default SpendsList