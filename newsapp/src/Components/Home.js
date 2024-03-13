import React from 'react'
import { Link } from 'react-router-dom'
import laptop from '../globe.png'
import Testabout from './Testabout'
const Home = () => {
  return (
    <>
    
    <div className="container-xxl position-relative p-0">
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            
                            <h1 className="display-3 text-white animated slideInLeft"><strong>Join Us</strong></h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2" style={{fontSize:"1.4rem"}}>Stay up-to-date with the latest newsfrom around the world on our news website. From breaking news to in-depth analysis, we have you covered with the most comprehensive coverage of current events.</p>
                            <Link to="/Signup" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Signup Now</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src={laptop} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
                    <h1 className="mb-5">Explore Our Services</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                <h5>Explore the World</h5>
                                <p>You can get to know about various events happening in whole world</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                            <i className="fa fa-3x fa-newspaper text-primary mb-4"></i>
                                <h5>Validate News</h5>
                                <p>Check reality of any news just by following simple steps</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h5>24/7 Service</h5>
                                <p>We are available in your service anytime</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                            <i className="fa fa-3x fa-check-circle text-primary mb-4"></i>
                                                            <h5>Trusted News</h5>
                                <p>You can read as many trusted and verified news from our top sources</p>
                            </div>
                        </div>
                    </div>
                    
                 
                    
                   
                </div>
            </div>
            <Testabout></Testabout>
        </div>

        </>
  )
}

export default Home
