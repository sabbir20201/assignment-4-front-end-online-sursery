
import { AlertDialogAction } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useGetNurseryQuery, useUpdateProductMutation } from "@/redux/api/baseApi";
// import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast";

interface IFormInput {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
}
// const imag_HOSTING_KEY = "a9558b5d7cd6b8968b2f112eeb10ad96";
// const imag_HOSTING_API = `https://api.imgbb.com/1/upload?key=${imag_HOSTING_KEY}`;
const UpdateProduct = ({ id, item }) => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const [updateProduct] = useUpdateProductMutation()
    const { refetch } = useGetNurseryQuery({})

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {

            // const imageFile = { image: data.image[0] }
            // console.log(imageFile)
            // const res = await axios.post(imag_HOSTING_API, imageFile, {
            //     headers: {
            //         'Content-type': 'multipart/form-data'
            //     }
            // })
            // console.log("response image bb", res);
            // if (res.data.success) {
            const nurseryData = {
                image: data.image,
                title: data.title,
                description: data.description,
                price: data.price,
                rating: data.rating,
                category: data.category,
            }
            const result = await updateProduct({ id, updatedData: nurseryData })
            if (result.data.data._id) {
                toast.success('Product updated Successfully', { duration: 4000 })
                await refetch()
                console.log("result after update", result);
            }
            // }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Toaster position="top-right"></Toaster>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* {item.image && (
                    <div className="my-2">
                        <img src={item.image} alt="Current Product" className="max-w-16 h-20" />
                    </div>
                )} */}
                <Label htmlFor="image">image</Label>
                <Input defaultValue={item.image} className="my-1 max-w-96 " type=" " {...register("image")} />
                {/* <Input className="my-1 max-w-96 " type="file" {...register("image")} /> */}

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