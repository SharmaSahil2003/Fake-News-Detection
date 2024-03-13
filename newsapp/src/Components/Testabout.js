import React from 'react'
import { Link } from 'react-router-dom'

import newsabout from '../newsabout.jpg'
import newsabout2 from '../newsabout6.jpg'
import newsabout3 from '../newsabout7.jpg'
import newsabout5 from '../newsabout5.jpg'

const Testabout = () => {
  return (
    <div>

        <div className="container-xxl py-5">
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
                        <p className="mb-4">Welcome to RealityTime, a cutting-edge initiative founded by a team of 2nd-year bachelor students with a mission to combat the spread of fake news. Our vision is to create a platform that delivers accurate, trustworthy information to users around the world. Our project focuses on using Natural Language Processing (NLP) and machine learning to detect and classify fake news articles. By analyzing large volumes of data and using sophisticated algorithms...</p>
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
                        <Link className="btn btn-primary py-3 px-5 mt-2" to='/About'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
       


    </div>
  )
}

export default Testabout
