import { Button } from "antd";
import React from "react";
import { IMAGES } from "../../../assets/constant";
import "./constactUs.css";

const ContactUs = () => {
  const handleContactButtonClick = () => {
    const phoneNumber = "+6281615638362";
    const message = "Halo !";

    // Format nomor telepon dengan menghilangkan spasi, tanda plus, dan tanda hubung
    const formattedPhoneNumber = phoneNumber.replace(/[\s+()-]/g, "");

    // Buat URL WhatsApp dengan nomor dan pesan yang ditentukan
    const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(message)}`;

    // Buka halaman WhatsApp di tab baru
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-us-section">
      <div className="text-contact-us">
        <h1>Mari Berkolaborasi Bersama Kami!</h1>
        <p>Ada Pertanyaan Lain? Hubungi Kami</p>
        <Button onClick={handleContactButtonClick}>Contact Us</Button>
      </div>

      <div className="image-contact-us">
        <img src={IMAGES.logoGram} alt="contact us image" />
      </div>
    </div>
  );
};

export default ContactUs;
