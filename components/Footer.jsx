import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Onu Head Phones All rights reserved</p>
      <p className="icons">
        <AiFillLinkedin />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
      </p>

    </div>
  )
}

export default Footer