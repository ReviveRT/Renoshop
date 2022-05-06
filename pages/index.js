import MainHeadContact from '../components/layout/HomePage/Head/Head-Contact/main-head-contact'
import MainNavigationFixedPanel from '../components/layout/HomePage/Head/Head-Navigation/mainNavigation'
import WooComerce from '../components/layout/HomePage/Body/WoocomerceSection/wooCommerce'
import BestSellers from '../components/layout/HomePage/Body/BestSellers/bestSellers'
import Collections from '../components/layout/HomePage/Body/Collections/collections'
import Discount from '../components/layout/HomePage/Body/Discount/discount'
import FeaturedProducts from '../components/layout/HomePage/Body/FeaturedProducts/featuredProducts'
import Offers from '../components/layout/HomePage/Body/Offers/offers'
import FooterSocial from '../components/layout/HomePage/Footer/FooterSocial/footerSocial'
import HomeFooter from '../components/layout/HomePage/Footer/Footer/homeFooter'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import PaginationComponent from './[paginationComponent]'
import {useState} from 'react'


export default function Home({ items ,itemsTwo, df}) {


  
  return (
    <div className={styles.container}>
        <MainHeadContact />
        <MainNavigationFixedPanel/>
        <WooComerce />
        <BestSellers   path={itemsTwo} />
        <Offers />
        <Collections />
        <PaginationComponent />
        <FeaturedProducts url={items}  />
        <Discount />
        <FooterSocial />
        <HomeFooter />
    </div>
  )
}
export async function getStaticProps(){
 

  const res = await fetch(`https://items-carts.herokuapp.com/items?page=1&limit=10`);
  const resTwo = await fetch('https://items-carts.herokuapp.com/items?page=3&limit=4');
  const d = await fetch('https://items-carts.herokuapp.com');
  const df = await d.json()
  const items = await res.json()
  const itemsTwo = await resTwo.json()

  return {
    props: { items , itemsTwo , df}
  }
  
}