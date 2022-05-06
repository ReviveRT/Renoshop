import SellersStyle from './bestSellers.module.css'
import ShoppingCarts from '../../../../UI-UX/shoppingCart/shoppingCarts'


function BestSellers(props) {

  return (
    <div className={SellersStyle.bestSellers}>
        <div className={SellersStyle.bestSellersContainer}>
            <div className={SellersStyle.bestSellersTitles}>
                <h2 className={SellersStyle.sellerTitle}>BEST SELLERS</h2>
                <p className={SellersStyle.sellerSubtitle}><i>The best production from us</i></p>
                    <br />
                <p className={SellersStyle.sellerDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Omnis similique aperiam quo ipsa, totam a sed nam facere exercitationem facilis deserunt natus eius dicta 
                 voluptates ea aliquid expedita? Dolore, corporis!</p>
            </div>
            <div className={SellersStyle.bestSellersItems}>
                    {props.path.map((res,id) => (
                      <ShoppingCarts key={id} path={res.node.thumbnailImage.file.url}  name={res.node.name} price={res.node.shopifyProductEu.variants.edges[0].node.price}/>
                  ))}    
                    
                
                  {/* <ShoppingCarts name={props.path[3].node.name} path={props.path[3].node.thumbnailImage.file.url} price={props.path[3].node.shopifyProductEu.variants.edges[0].node.price}   />
                  <ShoppingCarts name={props.path[3].node.name} path={props.path[3].node.thumbnailImage.file.url} price={props.path[3].node.shopifyProductEu.variants.edges[0].node.price}   />  
                  <ShoppingCarts name={props.path[3].node.name} path={props.path[3].node.thumbnailImage.file.url} price={props.path[3].node.shopifyProductEu.variants.edges[0].node.price}   />    
                   <ShoppingCarts name={props.path[3].node.name} path={props.path[3].node.thumbnailImage.file.url} price={props.path[3].node.shopifyProductEu.variants.edges[0].node.price}   /> */} 
            </div> 
        </div>
    </div>
  )
}

export default BestSellers