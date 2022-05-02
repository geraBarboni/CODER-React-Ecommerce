import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'

const Product = () => {
  const { id } = useParams()

  return (
    <div>
      <ItemDetailContainer productId={id} />
    </div>
  )
}

export default Product
