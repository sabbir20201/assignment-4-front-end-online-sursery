import { Button } from "@/components/ui/button";
import { TNursery } from "@/type";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from '../../redux/hooks'
import { addToCart } from "@/redux/features/cartSlice";

const NurseryCard = ({ nursery }: { nursery: TNursery }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const handleAddToCart = (product: TNursery) => {
        console.log('product',product);
        dispatch(addToCart(product))
    }

    return (
        <div className="hover:shadow-lg transition transform duration-300 ease-in-out">
            <div className="card bg-base-100 shadow-sm rounded border border-teal-900 hover:shadow-2xl transition-transform transform duration-30 ease-out">
                <figure className="px-3 pt-3">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-sm" />
                </figure>
                <div className="card-body items-center text-center px-2">
                    <h2 className="card-title">{nursery.title}</h2>
                    <p>{nursery.price} BD</p>
                    <div className="card-actions">
                        <Button onClick={() => handleAddToCart(nursery)} className="w-full bg-[#083214]">Add To Cart</Button>
                        <Button  className="w-full bg-[#083214]" onClick={() => navigate(`/product/${nursery._id}`)}>Product Details</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NurseryCard;