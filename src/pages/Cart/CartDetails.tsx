import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useAppDispatch } from "@/redux/hooks"
import { updateQuantity } from "@/redux/features/cartSlice"


const CartDetails = ({ product }) => {
    console.log('product.quantity', product.quantity);

    const dispatch = useAppDispatch()
    const handleQuantity = (type: string, _id: string) => {
        const payload = { type, _id }
        dispatch(updateQuantity(payload));

    }
    return (
        <div className="py-10">
          
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle className="text-xl">  <p>Name: {product.title}</p></CardTitle>
                    <CardTitle className="text-xl"> <p>Price: {product.price}</p></CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-5">
                        <Button className="bg-[#083214]" onClick={() => handleQuantity('increment', product._id)}>Add +</Button>
                        <p className="text-xl font-bold">{product.quantity}</p>
                        <Button className="bg-[#083214]" onClick={() => handleQuantity('decrement', product._id)}>Mainus -</Button>
                    </div>
               
                </CardContent>
            </Card>
        </div>
    );
};

export default CartDetails;