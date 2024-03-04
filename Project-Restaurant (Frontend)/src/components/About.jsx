import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to UrbanEats, where culinary excellence meets warm hospitality. 
              Nestled in the heart of Bhopal, we pride ourselves on delivering a dining experience 
              that tantalizes the taste buds and creates lasting memories.
              At UrbanEats, we believe in the power of good food to bring people together. Thank you for choosing UrbanEats. We look forward to serving you 
              and sharing our passion for food, hospitality, and community. 
              <p> Bon appétit!</p>
            
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
