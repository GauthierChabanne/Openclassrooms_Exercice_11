import logo from '../assets/logo.svg'
import '../style/components/header.css'
import { NavLink } from 'react-router-dom'

function Header(){
  return(
    <header className='header'>
      <img src={logo} className='Kasa-logo' alt='logo' />
      <div className="header__links">
        <NavLink to="/" className='header__link'>Accueil</NavLink>
        <NavLink to="/infos" className='header__link'>A propos</NavLink>
      </div>
    </header>
  )
}

export default Header
