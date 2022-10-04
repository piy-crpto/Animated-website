import React from 'react'
import web from '../src/Images/img12.png';
import {Link} from 'react-router-dom';
import Common from './Common.jsx';

const About = () =>
{
     return(
       <>
         <Common
          name='Welcome to About Page' 
         imgsrc={web} 
         visit="/contact" 
         btnname="Contact Now" />
       </>
     );
};

export default About;