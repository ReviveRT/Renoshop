import NavStyle from './mainNavigation.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MainNavigationFixedPanel() {
  const [burgerMenu,setMenu] = useState(NavStyle.menuContent);
  const [activeMenu,setActiveMenu] = useState(NavStyle.filterWindow);
  
  
  const handleBurgerMenu = () => {
    if(burgerMenu === NavStyle.menuContent){
      setMenu(NavStyle.menuContentOpen);
      setActiveMenu(NavStyle.filterWindowActive)
    }else{
      setMenu(NavStyle.menuContent)
      setActiveMenu(NavStyle.filterWindow)
    }
  }
  
    return (
      <div className={NavStyle.nav} >
        <div className={NavStyle.navContainer}>
          <section className={NavStyle.navLogo}>
            <h1 className={NavStyle.logoTitle}> <span className={NavStyle.greenText}>RENOSHOP</span>BEE</h1>
          </section>
          <nav className={NavStyle.navigation}>
            <Link href="/"><a className={NavStyle.home}>HOME</a></Link>
            <Link href="/women"><a className={NavStyle.woman}>WOMEN</a></Link>
            <Link href="/men"><a className={NavStyle.man}>MEN</a></Link>
            <Link href="/kids"><a className={NavStyle.kids}>KIDS</a></Link>
            <Link href="/jewellery"><a className={NavStyle.jewellery}>JEWELLERY</a></Link>
  
          </nav>
          <section className={NavStyle.navPanel}>
            <FontAwesomeIcon className={NavStyle.cart} icon={faCartShopping} />
            <FontAwesomeIcon className={NavStyle.search} icon={faSearch} />
            <div className={NavStyle.menu} onClick={handleBurgerMenu}>
              <div className={burgerMenu}></div>
            </div>
          </section>
          <div className={activeMenu}>
          {/*   <Link href={"/account"}><a className={NavStyle.account} >My Account</a></Link> */}
            <Link href={'/filter'}><a className={NavStyle.filter} >Filter</a></Link>
          </div>
        </div>
      </div>
    )
}

export default MainNavigationFixedPanel