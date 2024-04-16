import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import "../index.css";

export default function Notification() {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <>
            <div className='home-container'>
                <div className="notification-container">
                    <div className="notification-cards">
                        <div className="notification-card">
                            <IoIosNotifications className="notification-icon" />
                            <div className="card-description">
                                <h1>Title</h1>
                                <p>Tshirt was purchased</p>

                                
                            </div>
                            
                        </div>

                        {/* Additional notification cards here */}
                    </div>
                </div>
            </div>
        </>
    );
}
