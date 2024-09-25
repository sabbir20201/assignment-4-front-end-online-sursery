
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateOrderMutation } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form"
interface IFormInput {
    name: string;
    email: string;
    address: string;
    phone: number;
    rating: number;
    category: string;
}
const Checkout = () => {
    const [createOrder] = useCreateOrderMutation()
    const { selectedItems, totalPrice, products } = useAppSelector((store) => store.cart);
    // const product = useAppSelector((store) => store.cart.products);


    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {

        try {
            const orderData = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
                productQuantity: selectedItems,
                totalPrice: totalPrice,
            }
            const result = await createOrder(orderData)
            console.log("orderData", orderData);
            console.log("result from backend =>", result);
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className="grid justify-center pb-10 max-w-6xl">

            <div className="">
                <h1 className="font-bold text-2xl p-3 text-center">Checkout</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="border p-6 w-full max-w-6xl">
                    <p className="font-semibold text-xl">User information</p>
                    <div className="flex gap-5 pt-5 mb-5 max-w-6xl">
                        <div>
                            <Label htmlFor="name">name</Label>
                            <Input className="my-1" type="name" {...register("name")} />

                            <Label htmlFor="">email</Label>
                            <Input className="my-1" type="email" {...register("email")} />
                        </div>
                        <div>
                            <Label htmlFor="phone">phone</Label>
                            <Input className="my-1" type="phone" {...register("phone")} />
                            <Label htmlFor="address">address</Label>
                            <Input className="my-1" type="address" {...register("address")} />
                        </div>
                    </div>
                    <div className="border p-5">
                        <h1 className="font-semibold text-xl pb-2">Order summary</h1>
                        <p>Product Name: {products.map((item, index) => <p key={item._id}>{index + 1}.{item.title}</p>)}</p>
                        <p>Quantity: {selectedItems}</p>

                        <p>Total Price :{totalPrice}</p>
                    </div>


                    <Button className="w-full my-1 max-w-96" type="submit">Proceed to payment</Button>
                </form>
            </div>

        </div>
    );
};

export default Checkout;

// shafayat.ph@gmail.com