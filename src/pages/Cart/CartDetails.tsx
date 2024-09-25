import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { updateQuantity } from "@/redux/features/cartSlice"

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

const CartDetails = ({ product }) => {
console.log('product.quantity',product.quantity);

    const dispatch = useAppDispatch()
    const handleQuantity = (type: string, _id: string) => {
        const payload = { type, _id }
        dispatch(updateQuantity(payload))

    }
    return (
        <div>


            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>  <p>{product.title}</p></CardTitle>
                    <CardTitle>  <p>{product.price}</p></CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex">
                        <Button onClick={() => handleQuantity('increment', product._id)}>Add +</Button>
                        <p>{product.quantity}</p>
                        <Button onClick={() => handleQuantity('decrement', product._id)}>Mainus -</Button>
                    </div>

                    <Button>delete</Button>
                </CardContent>
                {/* <CardFooter className="flex justify-between">
        <Button>Add +</Button>
        <Button>Mainus -</Button>
        <Button>delete</Button>
      </CardFooter> */}
            </Card>
        </div>
    );
};

export default CartDetails;