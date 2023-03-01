import Card from './Card'
import '../style/components/cardsList.css'
import { NavLink } from 'react-router-dom'

const appartementList = require('../data/appartementList.json')

function CardsList(){
  return(
    <section className='cards'>
      {appartementList.map((appartement) => (
        <NavLink key={appartement.id} to={"/appartement/" + appartement.id}>
          <Card
            id={appartement.id}
            cover={appartement.cover}
            title={appartement.title}
          />
        </NavLink>
      ))}
    </section>
  )
}


export default CardsList
