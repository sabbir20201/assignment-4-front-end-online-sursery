import { FaCartArrowDown } from "react-icons/fa";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const {selectedItems} = useAppSelector((store)=> store.cart);
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "ALL Product", path: "/allProduct" },
    { label: "Gallery", path: "/gallery" },
    { label: "cart", path: "/cart" },
    { label: "Dashboard", path: "/admin" }
  ]

  return (

    <div className="py-2 rounded-sm">
      <div className="navbar bg-[#234e30] rounded-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               {
                    menuItems.map((item, index)=>(
                        <ul key={index}>
                            <li className="cursor-pointer py-1" onClick={()=> navigate(item.path)}>
                                {item.label}
                             {item.label === 'cart' ? (
                              <>
                              <FaCartArrowDown size={30} className="" />{selectedItems} 

                              </>): ''
                             }
                             
                            </li>
                        </ul>
                    ))
                }
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">BB-Nursery</a> */}
          <a className="text-xl font-bold text-white">BB-Nursery</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
      
            <Menubar className="justify-center text-2xl py-6 text-[#083214]">
                {
                    menuItems.map((item, index)=>(
                        <MenubarMenu key={index}>
                            <MenubarTrigger onClick={()=> navigate(item.path)}>
                                {item.label}
                             {item.label === 'cart' ? (
                              <>
                              <FaCartArrowDown className="" />{selectedItems} 

                              </>): ''
                             }
                             
                            </MenubarTrigger>
                        </MenubarMenu>
                    ))
                }
            </Menubar>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="data:image/jpeg;base64,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" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </div>
      </div>

    </div>

  );
};

export default Navbar;