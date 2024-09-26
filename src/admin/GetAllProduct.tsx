import { Button } from "@/components/ui/button"
import { useDeleteProductMutation, useGetNurseryQuery, useUpdateProductMutation } from '@/redux/api/baseApi';
import { TNursery } from '@/type';
// import { Item } from '@radix-ui/react-menubar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import toast, { Toaster } from "react-hot-toast";
import SyncLoader from "react-spinners/ClipLoader"
// enum GenderEnum {
//     female = "female",
//     male = "male",
//     other = "other",
// }

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
const GetAllProduct = () => {
  const [deleteProduct] = useDeleteProductMutation()
  const { data, isLoading, refetch } = useGetNurseryQuery({})

  if (isLoading) {
    return (
      <p><SyncLoader></SyncLoader></p>
    )
  }
  const { data: nursery } = data
  const handleDelete = async (_id: string) => {
    try {
      const result = await deleteProduct(_id).unwrap()
      if(result.data._id){
        toast.success('Product deleted Successfully', {duration: 4000})
        refetch()
      }

      console.log('resulttt prodm delete', result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Toaster position="top-right"></Toaster>
      <h1 className="text-2xl font-bold">Total Nursery {nursery?.length} </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>image</th>
                <th>category</th>
                <th className='lg:space-x-16'><span>update</span> <span className=''>delete</span></th>
              </tr>
            </thead>
            <tbody>
              {
                nursery?.map((item: TNursery) => (
                  <tr key={item._id}>
                    <td>
                      <div className="lg:flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10">
                            <img
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item?.title}</div>
                          <div className="text-sm opacity-50">{item.price} BD</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.category}
                    </td>
                    <div className='lg:flex'>
                      <div>
                        <th>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            {/* <Button >Show Dialog</Button> */}
                            <Button>Update</Button>

                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure to delete this Product?</AlertDialogTitle>
                              <AlertDialogDescription className="flex justify-center">
                                <UpdateProduct id={item._id} item={item}></UpdateProduct>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction >
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                      </th>
                      </div>
                      <div>
                        <th>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              {/* <Button >Show Dialog</Button> */}
                              <Button className="bg-red-800" variant="outline" >Delete</Button>

                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure to delete this Product?</AlertDialogTitle>
                                <AlertDialogDescription>

                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-red-800" onClick={() => handleDelete(item._id)}>Delete</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </th>
                      </div>
                    </div>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default GetAllProduct;