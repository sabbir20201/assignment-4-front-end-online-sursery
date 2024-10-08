/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState = {
    products: [] as any,
    selectedItems: 0,
    totalPrice: 0,
    discountRate: 0.1,
    discountAmount: 0,
    grandTotal: 0,
    message: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // const product = action.payload;
            // const availableQuantity = product.availableQuantity;
            // console.log(availableQuantity);

            const isExists = state.products.find((product: { _id: any }) => product._id === action.payload._id)
            if (!isExists) {
                state.products.push({ ...action.payload, quantity: 1 })
            }
            state.selectedItems = state.products.reduce((total: number, product: any) => {
                return Number(total + product.quantity)
            }, 0)
            state.totalPrice = state.products.reduce((total: number, product: any) => {
                return Number(total + product.quantity * product.price)
            }, 0)
            state.discountAmount = state.totalPrice * state.discountRate
            state.grandTotal = state.totalPrice - state.discountAmount

        },
        updateQuantity: (state, action) => {
            const productTOUpdate = state.products.find((product: any) => product._id === action.payload._id)
            if (productTOUpdate) {
                if (action.payload.type === 'increment') {
                    const availableQuantity = productTOUpdate.availableQuantity;
                    if (productTOUpdate.quantity < availableQuantity) {
                        productTOUpdate.quantity += 1;
        
                    }else{
                       state.message = 'Product Is limited'
                    }
                }else if(action.payload.type === 'decrement'){
                    if(productTOUpdate.quantity > 0){
                        productTOUpdate.quantity -= 1
                       
                    }
                }
            }
            state.selectedItems = state.products.reduce((total: number, product: any) => {
                return Number(total + product.quantity)
            }, 0)
            state.totalPrice = state.products.reduce((total: number, product: any) => {
                return Number(total + product.quantity * product.price)
            }, 0)
            state.discountAmount = state.totalPrice * state.discountRate
            state.grandTotal = state.totalPrice - state.discountAmount
       

        },
        clearCart: (state) => {
            state.products = [];
            state.totalPrice = 0;
            state.selectedItems = 0;
            state.discountRate = 0;
            state.discountAmount = 0;
            state.grandTotal = 0
        }


    },

})



export const { addToCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer

