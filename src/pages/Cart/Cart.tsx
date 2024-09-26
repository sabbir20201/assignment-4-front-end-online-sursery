import { useAppSelector } from "@/redux/hooks";
import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummary";
import { Key } from "react";


const Cart = () => {
    const product = useAppSelector((store) => store.cart.products);
    console.log('all cart=>', product);

    return (
        <div>

            <div className="flex justify-around">
            <div>
                {
                    product?.map((product: { _id: Key | null | undefined; }) => <CartDetails key={product._id} product={product}></CartDetails>)
                }
            </div>
            <OrderSummary></OrderSummary>
            </div>
          
        </div>
    );
};

export default Cart;