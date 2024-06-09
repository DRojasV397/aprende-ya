
import { useEffect, useState } from "react"
import logo from '../../logo.png'
// import navIcon1 from '../../assets/img/nav-icon1.svg'
// import navIcon2 from '../../assets/img/nav-icon2.svg'
// import navIcon3 from '../../assets/img/nav-icon3.svg'
import profile from '../../assets/img/profile.svg'
import bell from '../../assets/img/bell.svg'
import cart from '../../assets/img/cart.svg'
import message from '../../assets/img/mensaje.svg'
import { Boton } from "../boton/Boton"
import { FaBars } from "react-icons/fa"
import './_navbar.scss'
export const NavBar = (props) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)//when the component is removed
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  
  
  //className="bg-body-tertiary"

  return (
    <div className={scrolled ? "scrolled nav" : "nav"} >
      <div className="container-nav">
        <div href="#home">
          <img className="home-icon" src={logo} alt="aprendeYa"></img>
        </div>
        <FaBars className="navbar__menu" size={26}
          onClick={() => props.handleToggleSidebar()}
        />
        <div className="navBar">
          <div className="nav-link">
            <a href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</a>
            <a href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Sobre Nosotros</a>
            <a href="/login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>FAQ</a>
            {props.type1 && <a href="/login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Publicar</a>}
            {props.type2 && <a href="/login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Iniciar sesión</a>}
          </div>
          <span className="navbar-text">
            {props.type1 && <div className="social-icon">
              <a href="#"><img src={bell} alt=""></img></a>
              <a href="#"><img src={profile} alt=""></img></a>
              <a href="#"><img src={message} alt=""></img></a>
              <a href="#"><img src={cart} alt=""></img></a>
            </div>}
            {/* <button className="" onClick={()=>console.log('boton')}><span>Empecemos</span></button> */}
            {props.type1 && <Boton text="Mis cursos" style="bold" />}
            {props.type2 && <Boton text="Crear cuenta" style="bold" />}
          </span>
        </div>
      </div>
    </div>
  )
}