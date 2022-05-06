import WooStyle from './wooCommerce.module.css'

function WooComerce(props) {
  return (
    <div className={WooStyle.mainContainer}>
        <div className={WooStyle.container}>
            <section className={WooStyle.titleAndBtn}>
                <h1 className={WooStyle.mainTitle} >THE BEST <br /> <span className={WooStyle.greenTxt}>WOOCOMMERCE</span></h1>
                <p className={WooStyle.subtitle} >Begin a New Adventure With Our New Collection. <br /> New Best Prices are Waiting for You! </p>
                <button className={WooStyle.buyNow}>BUY NOW</button>
            </section>
        </div>
    </div>
  )
}

export default WooComerce