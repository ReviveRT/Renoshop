import GoodStyle from './goods.module.css'
import ShoppingCarts from '../../../../UI-UX/shoppingCart/shoppingCarts'

function Goods(props) {
  return (
    <div className={GoodStyle.goodsContainer}>
        <div className={GoodStyle.container}>
            {props.url.map(urls => (
              <ShoppingCarts path={urls.node.thumbnailImage.file.url} name={urls.node.name} price={urls.node.shopifyProductEu.variants.edges[0].node.price} />
            ))}
            
            
            {/* <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts />
            <ShoppingCarts /> 
            <ShoppingCarts />  */}
        </div>
    </div>
  )
}


export default Goods