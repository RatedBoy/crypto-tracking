import React from "react";
import aboutUsImg from "../assets/images/about-us.png";

const AboutUsPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 bg-info p-3 rounded">
                        <h3>About Us</h3>
                    </div>
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-md-7 fn-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
                        sequi perferendis! Temporibus suscipit ipsam quas aperiam iure velit
                        dolorem repudiandae. Error atque saepe et repellendus nulla
                        voluptates illo, autem perspiciatis veritatis ea explicabo harum
                        quis tempore delectus, modi est accusantium tempora rerum itaque,
                        dolores quisquam suscipit. Ad aliquam voluptates velit consectetur
                        iusto ipsum beatae fugit explicabo suscipit qui, maxime dignissimos
                        odit blanditiis animi nihil! Sed sapiente mollitia nulla beatae,
                        deserunt nihil, illum voluptatibus neque dolores distinctio error
                        eius id quasi harum eveniet minima suscipit dolore omnis, minus
                        impedit explicabo dolorem asperiores. Rem commodi quis explicabo
                        eius illum aspernatur perspiciatis est.
                    </div>
                    <div className="col-md-5 text-center">
                        <img src={aboutUsImg} className="image-fluid about-img" alt="AboutUs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
