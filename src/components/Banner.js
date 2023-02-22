import '../style/components/banner.css'

function Banner(props){
  return(
    <article className="banner">
      <img className="banner__img" src={props.img} alt="Paysage enchanteur" />
    </article>
  )
}

export default Banner
