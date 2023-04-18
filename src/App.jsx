import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconNewSpent from './img/nuevo-gasto.svg';
import Modal from './components/Modal';
import { idGenerator } from "./helpers/index";
import SpendsList from './components/SpendsList';
import Filter from './components/Filter';

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [spends, setSpends] = useState(
    localStorage.getItem('spends') 
      ? JSON.parse(localStorage.getItem('spends')) : []
  )
  const [spendEdit, setSpendEdit] = useState({})
  const [filter, setFilter] = useState('') 
  const [filteredSpends, setFilteredSpends] = useState([])

  useEffect(() => {
    if(Object.keys(spendEdit).length > 0) {
      handleNewSpent()
    }
  }, [spendEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget&&isValidBudget 
      ? budget : 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('spends', spends.length > 0 
      ? JSON.stringify(spends) : JSON.stringify([]))
  }, [spends])

  useEffect(() => {
    if(filter) {
      const newFilteredSpends =  spends.filter(spend =>
        spend.category === filter)
      setFilteredSpends(newFilteredSpends)
    }
  }, [filter])

  useEffect(() => {
    const budgetLocalStorage = Number(localStorage.getItem('budget') ?? 0)

    if(budgetLocalStorage  > 0) {
      debugger
      setIsValidBudget(true)
    }
  }, [])
  
  const handleNewSpent = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 200);
  }

  const saveSpend =  spend =>  {
    if(!spend.id) {
      spend.id = idGenerator()
      spend.date = Date.now()
      setSpends([...spends, spend])
      setFilter('')
      return
    }

    const updatedSpends = spends.map( 
      spendState => spendState.id === spend.id 
        ? spend : spendState)
    setSpends(updatedSpends)
    setSpendEdit({})
    setFilter('')
  }

  const deleteSpend = id => {
    const updatedSpends = spends.filter(spend => spend.id !== id)
    setSpends(updatedSpends)
    setFilter('')
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        spends={spends}
        setSpends={setSpends}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget} />

      {isValidBudget && (
        <>
          <main>
            <Filter
              filter={filter}
              setFilter={setFilter} />
            <SpendsList
              setSpendEdit={setSpendEdit}
              spends={spends} 
              deleteSpend={deleteSpend} 
              filter={filter}
              filteredSpends={filteredSpends} />
          </main>
          <div className="nuevo-gasto">
            <img src={ IconNewSpent } alt="Icono nuevo gasto"
              onClick={handleNewSpent} />
          </div>
        </>
      )}

      {modal && (
        <Modal 
          setModal={setModal} 
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpend={saveSpend} 
          spendEdit={spendEdit}
          setSpendEdit={setSpendEdit}/>
      )}
    </div>
  )
}

export default App
