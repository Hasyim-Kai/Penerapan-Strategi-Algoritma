import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
   const transitionStyle = `transition-all duration-300`;
   const sidebarItemStyle = `p-2 hover:bg-white hover:text-blue-700 rounded-lg`;

   // get the active Route path
   let isLoginPage = useLocation().pathname === '/' ? true : false

   return isLoginPage ? <></> : <nav className="w-52 bg-blue-600 text-white text-lg py-2 px-5 shadow-xl">
      <ul>
         <li className={`border-b border-white pb-5 text-7xl mb-5`}>
            SA
         </li>
         <li className={`${sidebarItemStyle} ${transitionStyle}`}>
            <Link to='fibonacci'>Fibonacci</Link>
         </li>
         <li className={`${sidebarItemStyle} ${transitionStyle}`}>
            <Link to='find-number'>Find Number</Link>
         </li>
         <li className={`${sidebarItemStyle} ${transitionStyle}`}>
            <Link to='money-return'>Money Return</Link>
         </li>
         <li className={`${sidebarItemStyle} ${transitionStyle}`}>
            <Link to='data-car'>Data Car Visalization</Link>
         </li>
         <li className={`${sidebarItemStyle} ${transitionStyle}`}>
            <Link to='data-sales'>Data Sales Visalization</Link>
         </li>
         <li className={`${sidebarItemStyle} ${transitionStyle}`}>
            <Link to='/'>Logout</Link>
         </li>
      </ul>
   </nav>
}