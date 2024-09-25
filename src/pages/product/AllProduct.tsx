import { useGetNurseryQuery } from "@/redux/api/baseApi";
import NurseryCard from "./nurseryCard";
import { TNursery } from "@/type";

import { Input } from "@/components/ui/input";

import { useState } from "react";
interface IFormInput {

    description: string;

}
const AllProduct = () => {

    const { data, isLoading } = useGetNurseryQuery({})
    const [searchTerm, setSearchTerm] = useState("")

    console.log('dataaaa', data);
    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    const nursery = data?.data || [];

    const searchNursery = nursery?.filter((item: TNursery) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    console.log("searchNursery...", searchNursery);

    const sortedNursery = searchNursery.sort((a, b) => a.price - b.price)
    return (
        <div className="my-12">
            <div className="grid justify-center">
                <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-56 mb-3" placeholder="search" />
            </div>
            <h1 className="text-3xl text-green-600 font-bold text-center py-5">All Nursery</h1>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    nursery?.map((nursery: TNursery) => <NurseryCard key={nursery?._id} nursery={nursery} />)
                }
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    sortedNursery?.map((nursery: TNursery) => <NurseryCard key={nursery?._id} nursery={nursery} />)
                }
            </div>

        </div>
    );
};

export default AllProduct