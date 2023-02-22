import { NavLink } from 'react-router-dom'
import img from "../assets/404.svg"
import '../style/pages/error404.css'

function Error404 () {
  return(
    <section className="error-page">
      <img src={img} alt="error 404"/>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className='error-page__link'>Retourner sur la page d'accueil</NavLink>
    </section>
  )
}


export default Error404
