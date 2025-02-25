import React from 'react';
import { useState } from 'react';
function Product(){
  const [input, setInput] = useState('');
  const [predictedCategory, setPredictedCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the Flask server
    const response = await fetch('https://fake-news-backend-di3p.onrender.com/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });

    // Parse the response JSON
    const data = await response.json();

    // Update the predicted category state
    console.log(data);
    setPredictedCategory(data.realnews);
  };
  return (
    // <>
    //   <div className="container-xxl py-5 mt-5">
    //     <div className="container">
    //       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
    //         <h5 className="section-title ff-secondary text-center text-primary fw-normal">Test the News</h5>
    //         <h1 className="mb-5">Reality Check</h1>
    //       </div>
    //       <div className="row g-4">
            
    //         <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
    //           <p className="fw-bold text-center" style={{ fontSize: "24px" }}>"Fake news is like a virus, it spreads quickly and can be harmful. But with a critical mind and a discerning eye, we can inoculate ourselves against its effects."</p>
        
    //         </div>
    //         <div className="col-md-6">
    //           <div className="wow fadeInUp" data-wow-delay="0.2s">
    //             <form>
    //               <div className="row g-3">

    //                 <div className="col-12">
    //                   <div className="form-floating">
    //                     <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
    //                     <label for="message">Your News</label>
    //                   </div>
    //                 </div>
    //                 <div className="col-12">
    //                   <button className="btn btn-primary w-100 py-3" type="submit">Predict</button>
    //                   <div class="container text-center mt-5">
    //                     <div class="mb-3">
    //                       <button type="button" class="btn btn-success me-3">Success</button>
    //                       <button type="button" class="btn btn-danger ms-3">Danger</button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="container-xxl py-5 mt-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Test the News</h5>
            <h1 className="mb-5">Reality Check</h1>
          </div>
          <div className="row g-4">
            
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <p className="fw-bold text-center" style={{ fontSize: "24px" }}>"Fake news is like a virus, it spreads quickly and can be harmful. But with a critical mind and a discerning eye, we can inoculate ourselves against its effects."</p>
        
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}
                        value={input} onChange={(e) => setInput(e.target.value)}
                        ></textarea>
                        <label for="message">Your News</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Predict</button>

                      {predictedCategory && (
                        <div>
                          Prediction: {predictedCategory}
                        </div>
                      )}
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

export default Product
