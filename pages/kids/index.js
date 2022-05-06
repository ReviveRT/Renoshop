import MainHeadContact from '../../components/layout/KidsPage/Head/Head-Contact/main-head-contact'
import MainNavigationFixedPanel from '../../components/layout/KidsPage/Head/Navigation/mainNavigation'
import WooComerce from '../../components/layout/KidsPage/Body/WoocomerceSection/wooCommerce'
import Goods from '../../components/layout/KidsPage/Body/Goods/goods'
import Discount from '../../components/layout/KidsPage/Body/Discount/discount'
import FooterSocial from '../../components/layout/KidsPage/Footer/FooterSocial/footerSocial'
import KidsFooter from '../../components/layout/KidsPage/Footer/KidsFooter/kidsFooter'
import Offers from '../../components/layout/HomePage/Body/Offers/offers'

export default function Kids({items}) {
   
  
    return (
    <div>
        <MainHeadContact />
        <MainNavigationFixedPanel />
        <WooComerce />
        <Offers />
        <Goods url={items} />
        <Discount />
        <FooterSocial />
        <KidsFooter />
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