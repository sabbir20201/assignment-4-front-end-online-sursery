import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState = {
    products: [] as any,
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.1,
    grandTotal: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExists = state.products.find(product => product._id === action.payload._id)
            if (!isExists) {
                state.products.push({ ...action.payload, quantity: 1 })
            }
            state.selectedItems =  state.products.reduce((total: number, product: any) => {
                return Number(total + product.quantity)
            }, 0)
            state.totalPrice =  state.products.reduce((total: number, product: any) => {
                return Number(total + product.quantity*product.price)
            }, 0)

        },
        updateQuantity: (state:any, action)=>{
            
            state.products = state.products.map((product:any)=>{
                if(product._id === action.payload._id){
                    if(action.payload.type === 'increment'){
                        product.quantity = product.quantity +1;
                    }else if(action.payload.type === 'decrement'){
                        product.quantity -=1;
                    }
                    
                }
                return product
            })
           
        },
        
    },
  
})

// updateQuantity: (state, action) => {
//     state.products = state.products.map((product) => {
//         if (product._id === action.payload.id) {
//             if (action.payload.type === 'increment') {
//                 product.quantity += 1;
//             } else if (action.payload.type === 'decrement' && product.quantity > 0) {
//                 product.quantity -= 1;
//             }
//         }
//         return product; // Return the updated product
//     });

// export const setSelectedItems = (state: any) => {
//     state.products.reduce((total: number, product: any) => {
//         return Number(total + product.quantity)
//     }, 0)
// }
// export const selectedTotalPrice = (state: any) => {
//     state.products.reduce((total: number, product: any) => {
//         return Number(total + product.quantity*product.price)
//     }, 0)
// }

export const { addToCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer

// state.products.reduce((total:number, product:any) => {
//     return Number(total + product.quantity)
// }, 0)