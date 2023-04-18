import icono_ahorro from  '../img/icono_ahorro.svg'
import icono_comida from '../img/icono_comida.svg'
import icono_casa from '../img/icono_casa.svg'
import icono_gastos from '../img/icono_gastos.svg'
import icono_ocio from '../img/icono_ocio.svg'
import icono_salud from '../img/icono_salud.svg'
import icono_suscripciones from '../img/icono_suscripciones.svg'

export const getCategoryIcon = iconName => {
    const categoryIcons = {
        ahorro: icono_ahorro,
        comida: icono_comida,
        casa: icono_casa,
        gastos: icono_gastos,
        ocio: icono_ocio,
        salud: icono_salud,
        suscripciones: icono_suscripciones,
    }

    return categoryIcons[iconName.toLowerCase()];
}

export const idGenerator = () => {
    const random =  Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date;
}

export const dateFormater = (date) => {
    const formatedDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return formatedDate.toLocaleDateString('es-Es', options)
}

export const euroFormater = (quantity) => {
    return quantity.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}

export const categories = (isFilter = false) => {
    return [
        `${!isFilter ? '-- Seleccione --' : 'Todas las categorias'}`,'Ahorro', 'Comida', 'Casa',
        'Gastos', 'Ocio', 'Salud', 'Suscripciones']
}