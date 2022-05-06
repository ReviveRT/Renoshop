import ProductsStyle from './featuredProducts.module.css'
import ShoppingCarts from '../../../../UI-UX/shoppingCart/shoppingCarts'
import { useState } from 'react'



function FeaturedProducts(props) {




  return (
    <div className={ProductsStyle.featuredProductsContainer}>
        <div className={ProductsStyle.container}>
            <div className={ProductsStyle.productsTitles}>
                <h2>FEATURED PRODUCTS</h2>
                <p><i>Newest trends from top brands</i></p>
            </div>
            <div className={ProductsStyle.cartsContainer}>
                  {props.url.map((urls, id) => (
                <ShoppingCarts key={id} path={urls.node.thumbnailImage.file.url} name={urls.node.name} price={urls.node.shopifyProductEu.variants.edges[0].node.price} />
            ))}   
            </div>    
        </div>
    </div>
  )
}


export default FeaturedProducts