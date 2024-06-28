import './index.css'
const ImageItem = props => {
    const {imageDetails, checkMatchImage} = props
    const {imageUrl, thumbnailUrl, category} = imageDetails
    const handleImage = () => {
        checkMatchImage(imageUrl)
    }
    return(
        <li className='list-image-cotainer' onClick={handleImage}>
            <img src={thumbnailUrl} alt={category} className='list-image'/>
        </li>
    )
}
export default ImageItem