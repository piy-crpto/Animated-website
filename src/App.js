import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import  './Component/stylish.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";

const App = () =>
{
     return(
       <> 
       

           
        
             <Router>
             <Navbar />
           
                <Routes>
                  
                      <Route  path="/" element={<Home />}></Route> 
                      <Route  path="/about" element={<About />}></Route> 
                      <Route  path="/service" element={<Service />}></Route> 
                      <Route  path="/contact" element={<Contact />}></Route> 
                      
            </Routes> 

            <Footer />
    </Router> 

       </>
     );
};

export default App;