import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import map from "../assets/img/map.jpg"
import MobileMenu from "../components/MobileMenu";
import ClockLoader from "react-spinners/ClockLoader";


const ContactUs = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
        {loading ? (
          <div className="back"> <ClockLoader color={"white"} loading={loading}  size={150} /></div>
        ): (

          <div className="wrapper__contact">
       <MobileMenu></MobileMenu>
      <Header />
      <div className="contact__container">
        <div className="contact__icons">
          <a   target="_blank"  rel="noreferrer"  href="https://www.google.com/maps/place/Blue+Sky+Tour/@40.7847074,43.8406872,15z/data=!4m5!3m4!1s0x0:0x81b5f23c224e850c!8m2!3d40.7847074!4d43.8406872"> <LocationOnIcon
            className="contact__icon"
            style={{ fontSize: 100, color: "white" }}
          /></a>
         
         <a href="tel:+37494421443"> <LocalPhoneIcon
            className="contact__icon"
            style={{ fontSize: 100, color: "white" }}
          /></a>
         <a href= "mailto: skytourblue@gmail.com">
           <EmailIcon
            className="contact__icon"
            style={{ fontSize: 100, color: "white" }}
          /></a>
         
          <div className="contact__info">
             <a  target="_blank"    rel="noreferrer" className="linkcalll" href="https://www.google.com/maps/place/Blue+Sky+Tour/@40.7847074,43.8406872,15z/data=!4m2!3m1!1s0x0:0x81b5f23c224e850c?sa=X&ved=2ahUKEwjpvezUrZn3AhUYwzgGHS5_Bi4Q_BJ6BAhREAU"><p>Adress: Armenia, Gyumri,<br/> Abovyan st. 248</p></a>
            <p className="flex_p">(+374) 94 421443 <span className="flex_p2">(+374) 93 421443</span> <span className="flex_p2">(+374) 96 421221</span></p>
            <p>skytourblue@gmail.com</p> 
          </div>
        </div>
        <div className="map">
          <img src={map} alt="" />
        </div>


      </div>
     
    </div>
        )}

    
    </>
  );
};

export default ContactUs;
