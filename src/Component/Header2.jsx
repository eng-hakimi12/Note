import {NavLink} from "react-router-dom"
function Header() {
        return <div>
            <div className="flex justify-between pl-14 pr-14 h-20 pt-5 text-black bg-green-200">
                <h1 className="font-bold text-2xl">This is Header</h1>
                <ul className="flex gap-10 text-2xl font-bold">
                   <NavLink to="/home"> <li className="hover:underline cursor-pointer">Home</li> </NavLink> 
                   <NavLink to="/about"> <li className="hover:underline cursor-pointer">About </li> </NavLink> 
                   <NavLink to="/service"> <li className="hover:underline cursor-pointer">Service</li> </NavLink> 
                   <NavLink to="/contact"> <li className="hover:underline cursor-pointer">Contact</li> </NavLink> 
                </ul>
            </div>
        </div>
}
export default Header