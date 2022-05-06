import MainHeadContact from '../../components/layout/JewelleryPage/Head/Head-Contact/main-head-contact'
import MainNavigationFixedPanel from '../../components/layout/JewelleryPage/Head/Navigation/mainNavigation'
import WooComerce from '../../components/layout/JewelleryPage/Body/WoocomerceSection/wooCommerce'
import Goods from '../../components/layout/JewelleryPage/Body/Goods/goods'
import Discount from '../../components/layout/JewelleryPage/Body/Discount/discount'
import FooterSocial from '../../components/layout/JewelleryPage/Footer/FooterSocial/footerSocial'
import KidsFooter from '../../components/layout/JewelleryPage/Footer/JewelleryFooter/jewelleryFooter'
import Offers from '../../components/layout/HomePage/Body/Offers/offers'

export default function Jewellery({items}) {
   
  
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