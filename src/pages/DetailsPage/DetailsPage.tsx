import { useParams } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks";


export const DetailsPage = () => {
    const {id} = useParams();
    const products = useAppSelector((state) => state.products.products)

    const product = products.find(item => item.id === id);
    return (
        <div>
            {product && (
                <>
                <p>{product.name}</p>
                <p>{product.count}</p>
                </>
            )}
        </div>
    )
}