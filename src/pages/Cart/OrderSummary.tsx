import { Button } from "@/components/ui/button";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {selectedItems, totalPrice, grandTotal, discountAmount, discountRate} = useAppSelector((store)=> store.cart);
    const handleClearCart =()=>{
        dispatch(clearCart())
    }
    return (
        <div className="border p-5">
            <h1 className="text-3xl font-bold text-green-800">Order summary</h1>
            <h1>Product Quantity: {selectedItems}</h1>
            <h1>Total price: {totalPrice}</h1>
            <h1>DiscountRate: {discountRate}</h1>
            <h1>DiscountAmount: {discountAmount.toFixed(2)}</h1>
            <h1>Grand Total: {grandTotal} TK</h1>
            <Button className="my-3 bg-[#083214]" onClick={()=> handleClearCart()}>Clear Out</Button> <br />
            <Button className="bg-[#083214]" onClick={()=> navigate("/checkout")}>Proceed to Checkout</Button>
        </div>
    );
};

export default OrderSummary;