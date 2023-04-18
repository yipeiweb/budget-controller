import { getCategoryIcon, euroFormater, dateFormater } from "../helpers";
import { 
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
 } from "react-swipeable-list";
 import 'react-swipeable-list/dist/styles.css'

const Spend = ({spend, setSpendEdit, deleteSpend}) => {


    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setSpendEdit(spend)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() =>deleteSpend(spend.id)}
                destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
   return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}>
            <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img 
                        src={getCategoryIcon(spend.category)}
                        alt="Icono gasto" />
                    <div className="descripcion-gasto">
                        <p className="categoria">
                            {spend.category}
                        </p>
                        <p className="nombre-gasto">
                            {spend.name}
                        </p>
                        <p className="fecha-gasto">
                            Agregado el: {''}
                            <span>{dateFormater(spend.date)}</span>
                        </p>
                    </div>
                </div>

                <p className="cantidad-gasto">
                        {euroFormater(spend.quantity)}
                </p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Spend