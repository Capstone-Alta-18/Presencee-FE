import { Button } from "antd";
import React from "react";
import { IMAGES } from "../../../assets/constant";
import './constactUs.css'
const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="text-contact-us">
        <h1>Mari Berkolaborasi Bersama Kami!</h1>
        <p>Ada Pertanyaan Lain? Hubungi Kami</p>

        <Button>Contact Us</Button>
      </div>

      <div className="image-contact-us">
        <img src={IMAGES.logoGram} alt="contact us image" />
      </div>
    </div>
  );
};

export default ContactUs;
