// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
   getNursery: builder.query({
    query: ()=>({
        method: 'GET',
        url: '/product'
    })
   }),
   getProductById: builder.query({
    query: (id: string)=>({
      method: "GET",
      url: `/product/${id}`
    })
   }),
 
  //  uploadImage: builder.mutation({
  //   query:(imageData)=>({
  //     method: "POST",
  //     url: "https://api.imgbb.com/1/upload",
  //     body: imageData,
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     }

  //   })
  //  }),
   createProduct: builder.mutation({
    query:(newProduct)=>({
      method: "POST",
      url: "/product",
      body: newProduct
    })
   }),
   createOrder: builder.mutation({
    query:(orderData)=>({
      method: "POST",
      url: "/checkout",
      body: orderData
    })
   }),
   deleteProduct: builder.mutation({
    query:(id: string)=>({
      method: "DELETE",
      url: `/product/${id}`,
    })
   }),
   updateProduct: builder.mutation({
    query:({id, updatedData})=>({
      method: "PUT",
      url: `/product/${id}`,
      body: updatedData
    })
   }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNurseryQuery, useGetProductByIdQuery ,useCreateOrderMutation, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation} = baseApi

// http://localhost:5000/api/product