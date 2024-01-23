import Headroom from "react-headroom"
import BurgerMenu from "./BurgerMenu.png"

import "./headerStyles.css"
import { useEffect } from "react"
const Header = () => {


  useEffect(() => {}, [])


  const Menu = () => {
    if (window.innerWidth > 880) {
      return (
        <>
          <a href='#vinkitMuuttoon' className='nostyle'>
            <div className='headerButton'>Vinkit Muuttoon</div>
          </a>
          <div className='headerButton'>Yhteystiedot</div>
          <div className='headerButton'>Tarjouspyyntö</div>
        </>
      )
    } else {
      return <img style={{ height: "60%" }} src={BurgerMenu} />
    }
  }







  const img_src =
    "https://www.kokemuksia.fi/wp-content/uploads/2016/05/muuttokymppi.png"

  return (
    <Headroom id='headerWrap'>
      <div id='header'>
        <img id='headerLogo' src={img_src}></img>

        <div id='headerButtonContainer'>
          <Menu></Menu>
        </div>
      </div>
    </Headroom>
  )
}

export default Header
