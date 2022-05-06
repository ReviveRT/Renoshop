import OfferStyle from './offers.module.css'

function Offers() {
  return (
    <div className={OfferStyle.offersContainer}>
        <div className={OfferStyle.offersBox}>
            <div className={OfferStyle.specialOffers}>
                <div className={OfferStyle.imgOne} />
                <h3>SPECIAL OFFERS</h3>
                <p>Shop Big Save Big</p>
            </div>
            <div className={OfferStyle.freeDelivery}>
                <div className={OfferStyle.imgTwo} />
                <h3>FREE DELIVERY</h3>
                <p>On Orders Above $99</p>
            </div>
            <div className={OfferStyle.daysReturn}>
                <div className={OfferStyle.imgThree} />
                <h3>30 DAYS RETURN</h3>
                <p>Policy We Offer</p>   
            </div>
            <div className={OfferStyle.fastestShipping}>
                <div className={OfferStyle.imgFour} />
                <h3>FASTEST SHIPPING</h3>
                <p>2 Days Express</p>
            </div>
        </div>
    </div>
  )
}

export default Offers