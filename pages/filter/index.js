import FilterStyle from './filterStyle.module.css'
import MainNavigationFixedPanel from '../../components/layout/HomePage/Head/Head-Navigation/mainNavigation'
import MainHeadContact from '../../components/layout/HomePage/Head/Head-Contact/main-head-contact'
import FooterSocial from '../../components/layout/HomePage/Footer/FooterSocial/footerSocial'
import HomeFooter from '../../components/layout/HomePage/Footer/Footer/homeFooter'
import ShoppingCarts from '../../components/UI-UX/shoppingCart/shoppingCarts'
import { useEffect, useState } from 'react'

function Filter({df ,sdh}) {


  
  const colors = ['Green','White','Black','Brown','Orange','Natural','Yellow','Blue','Red','Purple','Gold','Silver']
  
  const arr = df.data.allContentfulProductPage.edges;
  const clearedArr = arr.filter(k => k.node.colorFamily !== null);
 /*  const [green,setGreen] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Green'))
  const [white,setWhite] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'White'))
  const [black,setBlack] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Black'))
  const [brown,setBrown] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Brown'))
  const [orange,setOrange] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Orange'))
  const [natural,setNatural] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Natural'))
  const [yellow,setYellow] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Yellow'))
  const [blue,setBlue] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Blue'))
  const [red,setRed] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Red'))
  const [purple,setPurple] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Purple'))
  const [gold,setGold] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Gold'))
  const [silver,setSilver] = useState(clearedArr.filter(l => l.node.colorFamily[0].name === 'Silver')) */
  const [pickedColor,setPickedColor] = useState(arr.map((it) => it))
  const [colorNames,setColorNames] = useState(FilterStyle.colorNames)
  const [price,setPrice] = useState([])
  

  function checkColor(e){
    const val = e.target.value;
    const checked = e.target.checked;
    const res = clearedArr.filter(l => l.node.colorFamily[0].name == val)
    setPickedColor(res)      
  }
  function checkPrice(e){
    const val = e.target.value;
    const ress = arr.filter(l => l.node.shopifyProductEu.variants.edges[0].node.price == val)
    setPrice(ress)
  }

  return (
    <div>
    <MainHeadContact />
    <MainNavigationFixedPanel />
    <div className={FilterStyle.container}>
        <div className={FilterStyle.filterBox}>
            <div className={FilterStyle.settingsContainer}>
                <div className={FilterStyle.categories}>
                    
                </div>
                <div className={FilterStyle.priceFilter}>
                    <input className={FilterStyle.price} onChange={checkPrice} placeholder="Search Price as $250.00 Format" type="number" id="price" />
                </div>
                <div className={FilterStyle.colorsFilter}>
                    <h4>COLORS</h4>
                    {colors.map((c,id) => (
                      <div key={id}> 
                        <input id={c} onChange={checkColor} value={c} className={FilterStyle.colorCheck} type="checkbox" />
                        <label htmlFor={c} onClick={() => setPrice([])} className={colorNames}>{c}</label>
                      </div>   
                    ))}
                </div>
            </div>
            <div className={FilterStyle.cartsContainer}>
                  {price.length === 0 ? pickedColor.map((res,id) => (
                    <ShoppingCarts key={id} path={res.node.thumbnailImage.file.url} name={res.node.name} price={res.node.shopifyProductEu.variants.edges[0].node.price} />
                  )) :
                  price.map((es,id) => (
                    <ShoppingCarts key={id} path={es.node.thumbnailImage.file.url}  name={es.node.name} price={es.node.shopifyProductEu.variants.edges[0].node.price} />
                  ))}
            </div>
        </div>
    </div>
    <FooterSocial />
    <HomeFooter />
    </div>
  )
}


export async function getStaticProps(){
    
    const sh = await fetch('https://items-carts.herokuapp.com/items?page=1&limit=6')
    const sdh = await sh.json()

    const d = await fetch('https://items-carts.herokuapp.com');  
    const df = await d.json()
  

  
    return {
      props: { df , sdh }
    }
    
  }


export default Filter