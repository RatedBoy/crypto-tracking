import React from 'react';
import contactUsImg from "../assets/images/contact.png";

const ContsactUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 bg-warning p-3 rounded">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className="col-md-7 fn-2">
                    <div>
                        <h3 className="text-primary">How To Contact Us?</h3>
                        <br />
                        <h5>+98 912 222 2222</h5>
                        <h5>+98 21 66 66 66 66</h5>
                        <h5>test@ratedct.com</h5>
                    </div>
                    <hr />
                    <div>
                        <form action="send-form.php" method="get">
                        <div className="mb-3">
                            <label className="form-label">Your Name:</label>
                            <input type="text" className="form-control" placeholder="Please Enter Your Name ..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your Message:</label>
                            <input type="text" className="form-control" placeholder="Please Enter Your Message ..." />
                        </div>
                        <input type="submit" className='btn btn-outline-success p-2 w-100' value="Send" />
                        </form>
                    </div>
                    


                </div>
                <div className="col-md-5 text-center">
                    <img src={contactUsImg} className="image-fluid about-img" alt="AboutUs" />
                </div>
            </div>
        </div>
    );
}

export default ContsactUsPage;