import {useState, useEffect} from 'react'
import { categories } from "../helpers/index.js";

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className="campo">
                <label htmlFor="category">
                    Filtrar Gastos
                </label>
                <select id="category" 
                    value={filter}
                    onChange={e => setFilter(e.target.value)}>
                    {
                        categories(true).map((category, i) => 
                            <option value={i!=0 ? category : ''} key={i}>
                                {category}
                            </option>
                        )
                    }
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filter