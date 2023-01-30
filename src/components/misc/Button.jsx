import React from 'react';
import './Button.css'
import { Link } from "react-router-dom"

const Button = () => (
 <div >  
    <div className='titre'>
        <h1>BIENVENUE SUR MA PAGE</h1>
   </div>

   <div className='bouton'>
   <Link  to="/ContactUs">S'inscrire</Link>
   </div> 
</div>
);

export default Button;