import MainHeadContact from '../../components/layout/MenPage/Head/Head-Contact/main-head-contact'
import MainNavigationFixedPanel from '../../components/layout/MenPage/Head/Navigation/mainNavigation'
import WooComerce from '../../components/layout/MenPage/Body/WoocomerceSection/wooCommerce'
import Goods from '../../components/layout/MenPage/Body/Goods/goods'
import Discount from '../../components/layout/MenPage/Body/Discount/discount'
import FooterSocial from '../../components/layout/MenPage/Footer/FooterSocial/footerSocial'
import WomenFooter from '../../components/layout/MenPage/Footer/MenFooter/homeFooter'
import Offers from '../../components/layout/HomePage/Body/Offers/offers'

export default function Men({items}) {
   
  
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