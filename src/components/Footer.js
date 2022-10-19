import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer_left">
          <p className="social">OUR SOCIALS</p> <div className="arrow-5"></div>
        </div>

        <div className="footer_mid">
          <a target="_blank" rel="noreferrer"  href="https://www.facebook.com/blueskytouragency">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a  target="_blank" rel="noreferrer" href="https://www.instagram.com/blueskytour_/">
            <i className="fab fa-instagram"></i>
          </a>
          <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/blue-sky-tour/about/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="tel:+37494421443">
            <i className="fas fa-phone-square-alt"></i>
          </a>
        </div>

        <div className="footer_right_p">&copy; Powered By Levon Asoyan</div>
      </div>
    </footer>
  );
};

export default Footer;
