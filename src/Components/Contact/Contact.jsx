import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in Touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">

            <div className="contact-card">
              <i className="bx bxl contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">akilainduwara@gmail.com</span>

              <a href="mailto:akilainduwara@gmail.com" target="_blank" className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl contact_card-icon"></i>

              <h3 className="contact_card-title">WhatsApp</h3>
              <span className="contact_card-data">+9471-43-30-705</span>

              <a href="https://api.whatsapp.com/send?phone=+94714330705&text=Hello,more information!" className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl contact_card-icon"></i>

              <h3 className="contact_card-title">Messenger</h3>
              <span className="contact_card-data"></span>

              <a href="" className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me your Message</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// time stamp : 2:30:00