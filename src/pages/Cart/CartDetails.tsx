import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useAppDispatch } from "@/redux/hooks"
import { updateQuantity } from "@/redux/features/cartSlice"
import toast, { Toaster } from "react-hot-toast";

const CartDetails = ({ product }) => {
    console.log('product.quantity', product.quantity);

    const dispatch = useAppDispatch()
    const handleQuantity = (type: string, _id: string) => {
        const payload = { type, _id }
        dispatch(updateQuantity(payload));

    }
    return (
        <div>
            <div>
                <Toaster position="top-right"></Toaster>
            </div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>  <p>{product.title}</p></CardTitle>
                    <CardTitle>  <p>{product.price}</p></CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex">
                        <Button className="bg-[#083214]" onClick={() => handleQuantity('increment', product._id)}>Add +</Button>
                        <p>{product.quantity}</p>
                        <Button className="bg-[#083214]" onClick={() => handleQuantity('decrement', product._id)}>Mainus -</Button>
                    </div>
                    <Button>delete</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default CartDetails;