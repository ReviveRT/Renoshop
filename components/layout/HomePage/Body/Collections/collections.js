import CollectionStyle from './collections.module.css'

function Collections() {
  return (
    <div className={CollectionStyle.collectionContainer}>
        <div className={CollectionStyle.collectionBox}>
            <div className={CollectionStyle.summerBox}></div>
            <div className={CollectionStyle.winterBox}></div>
            <div className={CollectionStyle.fashionBox}></div>
        </div>
    </div>
  )
}

export default Collections