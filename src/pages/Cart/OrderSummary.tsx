import { useAppSelector } from "@/redux/hooks";

const OrderSummary = () => {
    const {selectedItems, totalPrice} = useAppSelector((store)=> store.cart);
    return (
        <div>
            <h1 className="text-5xl text-green-800">Order summary</h1>
            <h1>selected count:{selectedItems}</h1>
            <h1>total price:{totalPrice}</h1>
            <h1>total tax:</h1>
            <h1>total amount:</h1>
        </div>
    );
};

export default OrderSummary;