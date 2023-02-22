import logo from '../assets/logo.svg'
import '../style/components/navbar.css'

function Navbar(){
  return(
    <header className='navbar'>
      <img src={logo} className='Kasa-logo' alt='logo' />
      <p>Accueil</p>
      <p>A propos</p>
    </header>
  )
}

export default Navbar
