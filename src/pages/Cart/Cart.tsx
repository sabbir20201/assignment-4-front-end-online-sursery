import { useAppSelector } from "@/redux/hooks";
import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummary";



interface Product {
    _id: string;
    title: string;
    price: number;
    availableQuantity: string;
    quantity: number
}
const Cart = () => {
    const product = useAppSelector((store) => store.cart.products);
    const message = useAppSelector((store) => store.cart.message);
    console.log('all cart=>', product);
    return (
        <div>
            <p className="text-3xl font-bold text-red-700">{message}</p>
            <div className="flex justify-around">
                <div>
                    {
                        product?.map((product: Product) => <CartDetails key={product._id} product={product}></CartDetails>)
                    }
                </div>
                <OrderSummary></OrderSummary>
            </div>

        </div>
    );
};

export default Cart;