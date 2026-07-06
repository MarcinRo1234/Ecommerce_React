import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id]);
  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
