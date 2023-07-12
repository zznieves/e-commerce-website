import React from "react";

const Location = () => {

    // return a Location Component(HTML/JSX)
    return (
        <div className="location" id="Contact">

            <div className="location-info">
                <h2>Location</h2>
                <p>
                    170 Flatbush Ave<br/>
                    Brooklyn, NY 11217
                </p>
                <p>
                    <strong>HOURS</strong><br/><br />
                    Monday - Friday &ensp; 11am - 8:30pm<br />
                    Saturday &ensp; 10am - 10pm<br />
                    Sunday &ensp; 11am - 7pm
                </p>
                <p>
                    Contact Us: (347) 442-7711
                </p>
            </div>

            <div className="location-map">
                <iframe
                    id="interactive-map"
                    title="google-maps-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1614.361446468834!2d-73.97584541310415!3d40.68314157205598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae7e63253b%3A0x2ec74e263fb9805a!2sShake%20Shack%20Flatbush%20-%20Barclays%20Ctr!5e0!3m2!1sen!2sus!4v1688914145987!5m2!1sen!2sus" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    >

                </iframe>
            </div>

        </div>
    );
};

export default Location;