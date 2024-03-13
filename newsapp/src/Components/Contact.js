import React from 'react'
import { useState } from 'react';
const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        email: "",
        subject: "",
        message: "",
    });

    const postUserData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, email, subject, message } = userData;

        if (firstName && email && subject && message) {
            const res = await fetch(
                "https://newsapp-8395a-default-rtdb.firebaseio.com/feedbacks.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        email,
                        subject,
                        message,
                    }),
                }
            );

            if (res.status === 200) {
                setUserData({
                    firstName: "",


                    email: "",
                    subject: "",
                    message: "",
                });
                alert("Data Stored");
            } else {
                alert("Failed to store data");
            }
        } else {
            alert("Please fill all the fields.");
        }
    };

    return (
        <>
            <div class="container-xxl py-5 mt-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                        <h1 class="mb-5">Contact For Any Query</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-12">
                            <div class="row gy-4">
                                <div class="col-md-4">
                                    <h5 class="section-title ff-secondary fw-normal text-start text-primary">News</h5>
                                    <p><i class="fa fa-envelope-open text-primary me-2"></i>news@example.com</p>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                    <p><i class="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                    <p><i class="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe
                                title="Google Maps"
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!s1m12!1m3!1d3770.9847986512857!2d73.82379881488567!3d18.533258087407893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10ca6842c63%3A0x3f4963cf3073cbec!2sPICT%2C%20Dhankawadi%2C%20Pune%2C%20Maharashtra%20411043%2C%20India!5e0!3m2!1sen!2sus!4v1650620652215!5m2!1sen!2sus"
                                frameborder="0"
                                style={{ minHeight: "350px", border: "0" }}
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            />

                        </div>
                        <div class="col-md-6">
                            <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <form>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                    value={userData.firstName}
                                                    onChange={postUserData} />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                    value={userData.email}
                                                    onChange={postUserData} />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input name="subject"
                                                    id="subject"
                                                    className="form-control"
                                                    placeholder="Your Subject"
                                                    value={userData.subject}
                                                    onChange={postUserData} />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea name="message"
                                                    id="message"
                                                    className="form-control"
                                                    placeholder=" Your Message"
                                                    value={userData.message}
                                                    onChange={postUserData} style={{ height: "150px" }}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit" onClick={submitData}>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
