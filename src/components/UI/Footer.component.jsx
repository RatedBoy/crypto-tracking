import React from 'react';
import "./footer.css";

const FooterComponent = (props) => {
    return (
        <div>
            <footer className='footer'>
                <span>RatedCT - Crypto Tracking.</span> 
                <span className='d-none d-md-inline ms-2'>All Rights Reserved</span>
            </footer>
        </div>
    );
};

export default FooterComponent;