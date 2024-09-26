
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useGetNurseryQuery, useUpdateProductMutation } from "@/redux/api/baseApi";
import { TNursery } from "@/type";
import React from "react";
// import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast";

interface IFormInput {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    availableQuantity: string;
    category: string;
}
interface UpdateProductProps {
    id: string;
    item: TNursery;
 
}


const UpdateProduct: React.FC<UpdateProductProps> = ({ id, item }) => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const [updateProduct] = useUpdateProductMutation()
    const { refetch } = useGetNurseryQuery({})

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const nurseryData = {
                image: data.image,
                title: data.title,
                description: data.description,
                price: data.price,
                rating: data.rating,
                availableQuantity: data.availableQuantity,
                category: data.category,
            }
            const result = await updateProduct({ id, updatedData: nurseryData })
            if (result.data.data._id) {
                toast.success('Product updated Successfully', { duration: 4000 })
                await refetch()
                console.log("result after update", result);
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="max-w-6xl">
            <Toaster position="top-right"></Toaster>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="image">Put a image link</Label>
                <Input defaultValue={item.image} className="my-1 max-w-96 " type=" " {...register("image")} />

                <Label htmlFor="">Title</Label>
                <Input defaultValue={item.title} className="my-1 max-w-96 " type="title" {...register("title")} />

                <Label htmlFor="price">price</Label>
                <Input defaultValue={item.price} className="my-1 max-w-96 " type="price" {...register("price")} />

                <Label htmlFor="rating">rating</Label>
                <Input defaultValue={item.rating} className="my-1 max-w-96 " type="rating" {...register("rating")} />

                <Label htmlFor="category">category</Label>
                <Input defaultValue={item.category} className="my-1 max-w-96 " type="category" {...register("category")} />

                <Label htmlFor="description">description</Label>
                <Textarea defaultValue={item.description} className="my-1 max-w-96" {...register("description")} />


                <Button type="submit" className="w-full my-1 max-w-96" >
                    Update the Product
                </Button>





            </form>
        </div>
    );
};

export default UpdateProduct;