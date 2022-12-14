import './productDetails.css'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProducts'
import { useContext } from 'react'

const Products = () => {
  const { id } = useParams()
  const { loading, error, data } = useProduct(+id)


  if (loading) {
    return <h3>Loading...</h3>
  }
  if (error) {
    return <h3>Error Occured...</h3>
  }
  

  const { title, description, image, price } = data?.getSingleProduct
  return (
    <div className="wrapper">
      <div className="container">
        <div className="product">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="details">
            <p className="title">{title}</p>
            <p className="description">{description}.</p>
            <p className="price">${!!price.price && price?.price}.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products