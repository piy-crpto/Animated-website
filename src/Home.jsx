import React from 'react'
import web from '../src/Images/img1.png';
import {Link} from 'react-router-dom';
import Common from './Common.jsx';

const Home = () =>
{
     return(
       <>
         <Common
          name='Grow your business with' 
         imgsrc={web} 
         visit="/service" 
         btnname="Get Started" />
       </>
     );
};

export default Home;