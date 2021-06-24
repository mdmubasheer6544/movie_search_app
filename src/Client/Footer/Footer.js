import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <div className="aboutSection">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur veritatis, nemo odit vero soluta vel sit cupiditate
            nostrum quibusdam atque!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            vel.
          </p>
        </div>
        <div className="addressSection">
          <h3>Keep in Touch</h3>
          <ul>
            <li>Address:Degloor Naka,Nanded-431604</li>
            <li>Phone:09623559228</li>
            <li>Email:Mdmubasheer6544@gmail.com</li>
          </ul>
        </div>
      </div>
    );
};

export default Footer;