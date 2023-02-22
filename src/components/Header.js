import logo from '../assets/logo.svg'
import '../style/components/header.css'
import { NavLink } from 'react-router-dom'

function Header(){
  return(
    <header className='header'>
      <img src={logo} className='Kasa-logo' alt='logo' />
      <NavLink to="/" className='header__link' exact activeClassName="selected">Accueil</NavLink>
      <NavLink to="/infos" className='header__link' exact activeClassName="selected">A propos</NavLink>
    </header>
  )
}

export default Header
