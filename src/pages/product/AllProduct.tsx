import { useGetNurseryQuery } from "@/redux/api/baseApi";
import NurseryCard from "./nurseryCard";
import { TNursery } from "@/type";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SyncLoader from "react-spinners/ClipLoader"

const AllProduct = () => {
    const { data, isLoading } = useGetNurseryQuery({})
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const location = useLocation();
    console.log('dataaaa', data);
    if (isLoading) {
        return (
            <p><SyncLoader /></p>
        )
    }
    const nursery = data?.data || [];

console.log('selectedCategory', selectedCategory);
const filteredCategoryWiseNursery = nursery?.filter((item:TNursery)=> {
    const matchedSearch = item?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchedCategory = selectedCategory ? item?.category === selectedCategory: true;
    return matchedSearch &&  matchedCategory
}) 

    return (
        <div className="my-12">
            {
                location.pathname !== "/" && (
                    <div className="flex justify-center gap-5">
                    <div>
                        <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-56 mb-3" placeholder="search" />
    
                    </div>
                    <div>
                        <select className="select select-bordered w-full max-w-xs"
                        onChange={(e)=> setSelectedCategory(e.target.value)}
                        >
                            <option value={''}>All Category</option>
                            <option value={'tree'}>tree Category</option>
                            <option value={'flower'}>flower Category</option>
                        </select>
                    </div>
                </div>
                )
            }
        
            <h1 className="text-3xl text-[#195529] font-bold text-center py-5">All Nursery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    filteredCategoryWiseNursery?.slice(0,8).map((nursery: TNursery) => <NurseryCard key={nursery?._id} nursery={nursery} />)
                }
            </div>
           

        </div>
    );
};

export default AllProduct