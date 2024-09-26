import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProductMutation, useGetNurseryQuery } from "@/redux/api/baseApi";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import { toast, Toaster } from 'react-hot-toast'

interface IFormInput {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    availableQuantity: string;
    category: string;
}

const imag_HOSTING_KEY = "a9558b5d7cd6b8968b2f112eeb10ad96";
const imag_HOSTING_API = `https://api.imgbb.com/1/upload?key=${imag_HOSTING_KEY}`;
const CreateProduct = () => {
    const { register, handleSubmit, reset } = useForm<IFormInput>()
    const [CreateProduct] = useCreateProductMutation()
    const { refetch } = useGetNurseryQuery({})


    const onSubmit: SubmitHandler<IFormInput> = async (data) => {


        try {
            const imageFile = { image: data.image[0] }
            console.log(imageFile)
            const res = await axios.post(imag_HOSTING_API, imageFile, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            })

            if (res.data.success) {
                const nurseryData = {
                    image: res.data.data.display_url,
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    rating: data.rating,
                    availableQuantity: data.availableQuantity,
                    category: data.category,
                }

                const result = await CreateProduct(nurseryData)
                if (result?.data?.success) {
                    toast.success('Product created Successfully', { duration: 4000 })
                    await reset()
                    await refetch()
                } else {
                    console.log('failed to create product');

                }
                console.log("result after nursery create", result);
            }

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>

            <div><Toaster />   </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="image">image</Label>
                <Input className="my-1 max-w-96 " type="file" {...register("image")} />

                <Label htmlFor="">Title</Label>
                <Input className="my-1 max-w-96 " type="title" {...register("title")} />

                <Label htmlFor="price">price</Label>
                <Input className="my-1 max-w-96 " type="price" {...register("price")} />

                <Label htmlFor="rating">rating</Label>
                <Input className="my-1 max-w-96 " type="rating" {...register("rating")} />

                <Label htmlFor="category">category</Label>
                <Input className="my-1 max-w-96 " type="category" {...register("category")} />
                <Label htmlFor="availableQuantity">availableQuantity</Label>
                <Input className="my-1 max-w-96 " type="availableQuantity" {...register("availableQuantity")} />

                <Label htmlFor="description">description</Label>
                <Textarea className="my-1 max-w-96" {...register("description")} />

                <Button className="w-full my-1 max-w-96" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default CreateProduct;