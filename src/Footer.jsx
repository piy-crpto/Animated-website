import React from 'react'
import web from '../src/Images/img12.png';
import {Link} from 'react-router-dom';
import Common from './Common.jsx';

const Footer = () =>
{
     return(
       <>
        <footer className='bg-light text-center mar'>
                <p>&copy; 2022 Piyush Yadav. Al Rights Reserved | Terms and Condition</p>
        </footer>
       </>
     );
};

export default Footer;