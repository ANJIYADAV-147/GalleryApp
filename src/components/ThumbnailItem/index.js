// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {ThumbnailDetails, onActiveImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = ThumbnailDetails

  const activeTabImage = isActive ? 'thumbnail ' : 'thumbnail active'

  const onClickImg = () => {
    onActiveImg(id)
  }

  return (
    <li className="Thumbnail-container" type="none">
      <button type="button" className="imgBtn" onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeTabImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
