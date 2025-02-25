import React, { useState } from 'react';
import Navbar  from './Components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import News from './Components/News';
import Product from './Components/Product';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
// import LoadingBar from 'react-top-loading-bar';
import NewsComponent from './Components/NewsComponent';



const App = () => {
  const [progress,setProgress]=useState(0)
  return (
    <div>
     
    
        <BrowserRouter>
        {/* <LoadingBar color='#ff0000'
            progress={progress}>
          </LoadingBar> */}
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route exact path='/About' element={<About></About>}></Route>
            <Route exact path='/Contact' element={<Contact></Contact>}></Route>
            <Route exact path='/News' element={<NewsComponent/>}>
              <Route index element={<News setProgress={setProgress}  key="general" pageSize={15} country="us" category="general"></News>}></Route>
              <Route exact path='/News/General' element={<News setProgress={setProgress}  key="general" pageSize={15} country="us" category="general"></News>}></Route>
              <Route exact path='/News/Health' element={<News setProgress={setProgress}  key="health" pageSize={15} country="us" category="health"></News>}></Route>
              <Route exact path='/News/Science' element={<News setProgress={setProgress}  key="science" pageSize={15} country="us" category="science"></News>}></Route>
              <Route exact path='/News/Sports' element={<News setProgress={setProgress}  key="sports" pageSize={15} country="us" category="sports"></News>}></Route>
              <Route exact path='/News/Entertainment' element={<News setProgress={setProgress}  key="entertainment" pageSize={15} country="us" category="entertainment"></News>}></Route>
              <Route exact path='/News/Technology' element={<News setProgress={setProgress}  key="technology" pageSize={15} country="us" category="technology"></News>}></Route>
              <Route exact path='/News/Business' element={<News setProgress={setProgress}  key="business" pageSize={15} country="us" category="business"></News>}></Route>
            </Route>
            <Route exact path='/Product' element={<Product></Product>}></Route>
            <Route exact path='/Login' element={<Login></Login>}></Route>
            <Route exact path='/Signup' element={<Signup></Signup>}></Route>
            

          {/* <Route exact path="/business"element={<News key="business" pageSize={5} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment"element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route> 
          <Route exact path="/general"element={<News key="general" pageSize={5} country="in" category="general"/>}></Route> 
          <Route exact path="/health"element={<News key="health" pageSize={5} country="in" category="health"/>}></Route> 
          <Route exact path="/science"element={<News key="science" pageSize={5} country="in" category="science"/>}></Route> 
          <Route exact path="/sports"element={<News key="sports" pageSize={5} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology"element={<News key="technology" pageSize={5} country="in" category="technology"/>}></Route>  */}
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      
    </div>
  )
}

export default App
