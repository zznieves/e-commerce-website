import React from "react";
import AboutUsPhoto from '../assets/food_truck2.jpg'

const AboutUs = () => {

    // return an AboutUs Component(HTML/JSX)
    return (
        <div className="AboutUs">

            <div className="aboutUsPhoto">
                <img src={AboutUsPhoto} alt="aboutUsStockImage"/>
            </div>

            <div className="aboutUsText">
                <p id="time-title">Since 2014</p>
                <p id="aboutUsTitle">Epic Flavor</p>

                <p id="aboutUsTextContent">Welcome to <strong>Bite Me Burgers</strong>, 
                    where our passion for delicious burgers began in <br />
                    humble surroundings and has since grown into a beloved local establishment.<br />
                    We started our journey with a simple food truck, driven by a deep love for crafting<br />
                    mouthwatering burgers that ignite taste buds and create unforgettable experiences.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;