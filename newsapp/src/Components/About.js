import React from 'react';
// import './about.css';
import newsabout from '../newsabout.jpg'
import newsabout2 from '../newsabout6.jpg'
import newsabout3 from '../newsabout7.jpg'
import newsabout5 from '../newsabout5.jpg'
import mayur from '../mayur.jpg'
import sahil from '../sahil.jpg'
import shri from '../shri1.jpg'
import vedant from '../vedant.jpg'
import { Link } from 'react-router-dom';
export const About = () => {
  return (
   <>
   <div className="container-xxl py-5 mt-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                        <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={newsabout} alt="..."/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={newsabout2}style={{marginTop:" 25%"}} alt="..."/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={newsabout3} alt="..."/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={newsabout5} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 className="mb-4">Welcome to RealityTimes</h1>
                        <p className="mb-4">Welcome to RealityTime, a cutting-edge initiative founded by a team of 2nd-year bachelor students with a mission to combat the spread of fake news. Our vision is to create a platform that delivers accurate, trustworthy information to users around the world. Our project focuses on using Natural Language Processing (NLP) and machine learning to detect and classify fake news articles. By analyzing large volumes of data and using sophisticated algorithms, we are able to identify patterns and indicators that help us distinguish between real and fake news. At RealityTime, we are dedicated to using our skills and expertise in NLP, machine learning, and data analysis to address the pressing issue of fake news. Our team members possess a deep understanding of tools such as NLTK and Sci-kit Learn, and we are constantly exploring new approaches to improving our models and algorithms. We believe that access to accurate, trustworthy information is a fundamental human right, and we are committed to making a positive impact in our communities by combatting the spread of misinformation. Through our project, we are working to build a more informed, engaged, and resilient society. Thank you for visiting our website and please do not hesitate to contact us if you have any questions or feedback. We look forward to sharing our progress with you as we work towards our goal of creating a world with fewer instances of fake news.</p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">1M+</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Daily</p>
                                        <h6 className="text-uppercase mb-0">News</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">100+</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Country</p>
                                        <h6 className="text-uppercase mb-0">News</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Expert Developers</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={sahil} alt="..."/>
                            </div>
                            <h5 className="mb-0">Sahil Sharma</h5>
                            <small>Front-End Developer</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={mayur} alt="..."/>
                            </div>
                            <h5 className="mb-0">Mayur Waghmare</h5>
                            <small>Back-End Developer</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to="https://www.linkedin.com/in/mayur-waghmare-401061212"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to="https://twitter.com/Mayur_7891?t=72LOiqsTK3kqNkQTmGqq_Q&s=09"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to="https://instagram.com/ma.yur_78?igshid=ZDdkNTZiNTM="><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={shri} alt="..."/>
                            </div>
                            <h5 className="mb-0">Shrihari Tiwari</h5>
                            <small>ML Engineer</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to="https://www.linkedin.com/in/shrihari-tiwari-063426224/"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to="https://twitter.com/951Shrihari"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to="https://www.instagram.com/951shrihari/"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={vedant} alt="..."/>
                            </div>
                            <h5 className="mb-0">Vedant Rawat</h5>
                            <small>Marketing Head</small>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className="btn btn-square btn-primary mx-1" to="https://linkedin.com/in/username"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to="https://twitter.com/username"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-primary mx-1" to="https://instagram.com/username"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        
</>
  )
}

export default About
