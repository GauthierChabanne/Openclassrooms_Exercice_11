import logo from '../assets/footer-logo.svg'
import '../style/components/footer.css'

function Footer(){
  return(
    <footer className='footer'>
      <img src={logo} className='Kasa-logo' alt='logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
