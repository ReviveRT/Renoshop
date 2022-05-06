
import MainHeadContact from '../../components/layout/WomenPage/Head/Head-Contact/main-head-contact'
import MainNavigationFixedPanel from '../../components/layout/WomenPage/Head/Navigation/mainNavigation'
import WooComerce from '../../components/layout/WomenPage/Body/WoocomerceSection/wooCommerce'
import Goods from '../../components/layout/WomenPage/Body/Goods/goods'
import Discount from '../../components/layout/WomenPage/Body/Discount/discount'
import FooterSocial from '../../components/layout/WomenPage/Footer/FooterSocial/footerSocial'
import WomenFooter from '../../components/layout/WomenPage/Footer/WomanFooter/homeFooter'
import Offers from '../../components/layout/HomePage/Body/Offers/offers'

export default function Women({items}) {
   
    return (
    <div>
        <MainHeadContact />
        <MainNavigationFixedPanel />
        <WooComerce />
        <Offers />
        <Goods url={items} />
        <Discount />
        <FooterSocial />
        <WomenFooter />
    </div>
  )
}
 
export async function getStaticProps(){
  const res = await fetch('https://items-carts.herokuapp.com/items?page=4&limit=20');

  const items = await res.json()

  return {
    props: { items }
  }
  
} 