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
    { label: "Add A Product", path: "/addNursery" },
    { label: `cart ${selectedItems}`, path: "/cart" },
    { label: "Dashboard", path: "/admin" }
  ]

  return (

    <div className="py-2">
      {/* <Menubar className="justify-center text-2xl py-6">
                {
                    menuItems.map((item, index)=>(
                        <MenubarMenu key={index}>
                            <MenubarTrigger onClick={()=> navigate(item.path)}>
                                {item.label}
                            </MenubarTrigger>
                        </MenubarMenu>
                    ))
                }
            </Menubar> */}
      <div className="navbar bg-base-100">
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
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">BB-Nursery</a> */}
          <a className="text-xl font-bold">BB-Nursery</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li><a>Item 1</a></li>
            <li><a>item 2</a></li>
            <li><a>Item 3</a></li> */}
            <Menubar className="justify-center text-2xl py-6">
                {
                    menuItems.map((item, index)=>(
                        <MenubarMenu key={index}>
                            <MenubarTrigger onClick={()=> navigate(item.path)}>
                                {item.label}
                            </MenubarTrigger>
                        </MenubarMenu>
                    ))
                }
            </Menubar>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

    </div>

  );
};

export default Navbar;