
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export default function Nav({ showSideBar, setShowSideBar }) {


    return (
        <nav>
            <div className='wrapper'>

                <Link to="/" className='link'>
                    <div className="logo_container">
                        <h1 className="logoh1">Clothify </h1>
                        <img src="logo.png" className="logo" alt="Clothify Logo" />
                    </div>
                </Link>


                <ul className='nav_ul'>
                    <Link to="/User" className='link'>
                        <li className='nav_li'>
                            <FaUserCircle className="icon" />
                            <span>User</span>
                        </li>
                    </Link>

                    <Link to="/Products" className='link'>
                        <li className='nav_li'>
                            <MdOutlineProductionQuantityLimits className="icon" />
                            <span>Product</span>
                        </li>
                    </Link>

                    <Link to="/Orders" className='link'>
                        <li className='nav_li'>
                            <GoChecklist  className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>
                    

                    <Link to="/Payments" className='link'>
                        <li className='nav_li'>
                            <MdPayments  className="icon" />
                            <span>Payments</span>
                        </li>
                    </Link>
                    <Link to="/Notification" className='link'>
                        <li className='nav_li'>
                        <IoMdNotifications className="icon" />
                            <span></span>
                        </li>
                    </Link>

                    <Link to="/Setting" className='link'>
                        <li className='nav_li'>
                        <IoMdSettings className="icon" />
                            <span></span>
                        </li>
                    </Link>




                    <div className='nav_extra_icons'>
                      
                        <FaUserCircle className="icon" />
                    </div>
                </ul>

            </div>
        </nav>
    );
}
