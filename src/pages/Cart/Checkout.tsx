
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form"
interface IFormInput {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
}
const Checkout = () => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {


    }
    return (
        <div>
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

                <Label htmlFor="description">description</Label>
                <Textarea className="my-1 max-w-96" {...register("description")} />

                <Button className="w-full my-1 max-w-96" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Checkout;