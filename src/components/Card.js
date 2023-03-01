import '../style/components/card.css'

function Card(props){
  return(
    <article className="card" data-id={props.id}>
      <img className="card__cover" src={props.cover} alt={props.title} />
      <p className='card__title'>{props.title}</p>
    </article>
  )
}

export default Card
