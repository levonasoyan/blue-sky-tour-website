import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import a from "../assets/img/about1.jpg";
import c from "../assets/img/about3.jpg";
import d from "../assets/img/about2.jpg";
import MobileMenu from "../components/MobileMenu";
import ClockLoader from "react-spinners/ClockLoader";
import Footer from "../components/Footer";
const AboutUs = () => {
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
        <div className="back">
          {" "}
          <ClockLoader color={"white"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="wrapper_about">
          <MobileMenu />
          <Header />
          <section className="about">
            <div
              className="about__container"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              <h1>ABOUT US</h1>
              <div className="about__info">
                <div className="about__div">
                  <p>
                    Dear Fellow Travelers, Choose Fun. Choose Activity. Choose
                    Relax. Choose what you want from your perfect vacation, and
                    we’ll take care of the details. "Blue Sky Tour" provides a
                    full range of travel services! We believe that every guest
                    should have a trip of a lifetime. "Blue Sky Tour" is
                    dedicated to provide the best quality service to individual
                    and group travellers. The tours are carefully planned and
                    diligently researched to ensure an enjoyable and informative
                    trip. Your welfare is our utmost concern so all travel obeys
                    strict legislation on driving rules and passenger safety and
                    we only use well-maintained, reliable and comfortable
                    transport licensed by the local transport authorities.
                  </p>
                  <figure className="img__container">
                    <img src={a} alt="" />
                  </figure>
                </div>
                <div className="about__div">
                  <p>
                    "Blue Sky Tour" manages various tourism related services
                    such as:
                    <br /> - Booking, sale of air and railway tickets: Air and
                    rail tickets for travel across globally can be arranged by
                    our experienced staff. <br />- Excursion air and bus tours:
                    If you're looking for cheap flights and bus tours to Armenia
                    or anywhere else, Blue Sky Tour is here to help you. We have
                    the best prices for flights.
                    <br /> - Development of an individual excursion route:
                    You’ll visit all the most popular attractions in Armenia and
                    experience the best activities this city has to offer.{" "}
                    <br /> - Personal translator or guide: The individual
                    approach and professionalism of our guides will help
                    travelers to plan their trips in the best way and enjoy
                    their time with us. <br />- Rental (hire) of cars: What is
                    more important renting with us is always hassle-free.
                    Booking and renting you can be always confident since the
                    Blue Sky Tour staff is always ready to assist you.
                    <br /> - Reservation of hotels, restaurants: If you are
                    looking for some of the best hotels and restaurants, we can
                    help you with the best prices. Our team will help you to
                    choose your preferred hotel and the best price.
                  </p>
                  <figure className="img__container">
                    <img src={d} alt="" />
                  </figure>
                </div>
                <div className="about__div">
                  <p>
                    - Transfer to the airport, VIP transfer around the city or
                    abroad, taxi order: You are always welcome to us. The first
                    minute when you will be at airport we will take care of
                    everything, from your safety transfer to hotel and accompany
                    to airport.
                    <br /> - Sale of tickets for concerts, shows, cultural
                    events: You'll visit the most exciting places, concerts and
                    shows. We will make your day as incredible as our country
                    is.
                    <br />- Provision of international phone cards: We can
                    provide you international call cards to easily communicate
                    whoever you want.
                    <br /> - Support for visa processing: Blue Sky Tour is proud
                    to assist you and your family for a complete travel trip. We
                    know that holidays are a time for fun and relaxation,
                    spending quality time with people we admire and love for
                    their company, in new places both near and far from home.
                    Our visa experts are dedicated to helping achieve our
                    clients’ travel goals by dealing with the different services
                    involved such as airport transfers services and hotels
                    booking and so on.
                    <br /> - Medical tours: Our mission is to provide patients
                    from any country with the opportunity to receive the
                    necessary treatment with maximum efficiency and comfort.{" "}
                    <br /> - SMS informing: It's our honor to help you in any
                    question that you have. We are always available for you, so
                    don't hesitate and get in touch with us. Don't stop
                    exploring, there's much more to discover than you may think,
                    especially in Armenia.
                  </p>
                  <figure className="img__container">
                    <img src={c} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default AboutUs;
