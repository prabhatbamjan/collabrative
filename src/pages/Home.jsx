import React from 'react';
import Widjet from '../components/Widjet';
import Footer from '../components/Footer'; // Import the Footer component

export default function Home() {
    return (
        <>
            <div className='widjets'>
                <Widjet type={"users"} />
                <Widjet type={"order"} />
                <Widjet type={"earning"} />
                <Widjet type={"balance"} />
            </div>
            {/* Include the Footer component */}
            <Footer />
        </>
    );
}
