import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ClockLoader from "react-spinners/ClockLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1500);
  },[]);
  return (

     <>
     {loading ? (
       <div className="back"> <ClockLoader color={"white"} loading={loading}  size={150} /></div>
      
     ): (
      <div className="wrapper_home">
      <MobileMenu />
      <Header />

      <div className="container_home">
        <div className="arrow-10"></div>
        <h1 className="home_h1">
          WELCOME TO BLUE SKY TOUR
          <br />
          TO SEE OUR TOURS PLEASE USE NAVIGATION ABOVE
        </h1>
      </div>

      <Footer />
    </div>

     )}
    
    </>
  );
};

export default Home;
