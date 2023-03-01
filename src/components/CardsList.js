import Card from './Card'
import '../style/components/cardsList.css'

const appartementList = require('../data/appartementList.json')

function CardsList(){
  return(
    <section className='cards'>
      {appartementList.map((appartement) => (
        <Card
          key={appartement.id}
          id={appartement.id}
          cover={appartement.cover}
          title={appartement.title}
        />
      ))}
    </section>
  )
}


export default CardsList
