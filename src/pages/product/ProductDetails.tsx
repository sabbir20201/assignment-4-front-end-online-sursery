import { Button } from "@/components/ui/button";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    const { id} = useParams();
    const { data, isLoading } = useGetProductByIdQuery(id);
    if (isLoading) {
        return <p>Loading</p>
    }
    const { data: singleNursery } = data

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm border rounded-sm">
                <figure className="px-3 py-3">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>{singleNursery.description}</p>
                    <p>{singleNursery.price} BD</p>
                    <div className="card-actions">
                    <Button className="w-full">Add To Cart</Button>
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default ProductDetails;