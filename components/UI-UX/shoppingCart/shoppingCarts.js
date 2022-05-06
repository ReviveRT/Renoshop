import CartsStyle from './shoppingCarts.module.css'
import ReactStars from 'react-stars'
import { useState } from 'react'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ShoppingCarts(props) {

    const [cartPanelBox,setCartPanel] = useState(CartsStyle.cartPanel);

    const handleMouseEnter = () => {
       if(cartPanelBox === CartsStyle.cartPanel){
           setCartPanel(() => CartsStyle.cartPanelActive)
       }
    }

    const handleMouseLeave = () => {
        if(cartPanelBox === CartsStyle.cartPanelActive){
            setCartPanel(() => CartsStyle.cartPanel)
        }
    } 

  return (
    <div className={CartsStyle.shopCartContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={cartPanelBox}>
            <div className={CartsStyle.cart} >
                <FontAwesomeIcon className={CartsStyle.cartIcon} icon={faCartShopping} />
            </div>
            <div className={CartsStyle.like}>
                <FontAwesomeIcon className={CartsStyle.likeIcon} icon={faHeart} />
            </div>
        </div>
        <img  src={props.path}    alt="" className={CartsStyle.imgCarts}  />
        <p className={CartsStyle.cartDescription}>{   props.name   }</p>
        <p className={CartsStyle.cartPrice}>$ {    props.price    }</p>
        <ReactStars
            count={5}
            size={16}
            color2={'rgba(255,150,0)'}
            edit={true}
        />
    </div>
  )
}

export default ShoppingCarts