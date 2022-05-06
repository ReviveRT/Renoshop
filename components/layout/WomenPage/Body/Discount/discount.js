import DiscountStyle from './discount.module.css'

function Discount() {
  return (
    <div className={DiscountStyle.discountBlock}>
        <div className={DiscountStyle.discountContainer}>
            <div className={DiscountStyle.emailBlock}>
                <h1>Get Our Special Discount</h1>
                <p>Register Your Email for News and Special Offers</p>
                {/* <div className={DiscountStyle.form}> */}
                    <form>
                        <input placeholder='Email Address...' className={DiscountStyle.emailInput} type="text" />
                        <button className={DiscountStyle.btn} type='submit'>GET COUPON NOW</button>
                    </form>
                {/* </div>  */}   
            </div>
            <div className={DiscountStyle.sponsorsBlock}>
                <div className={DiscountStyle.sponsorOne}></div>
                <div className={DiscountStyle.sponsorTwo}></div>
                <div className={DiscountStyle.sponsorThree}></div>
                <div className={DiscountStyle.sponsorFour}></div>
            </div>
        </div>
    </div>
  )
}

export default Discount