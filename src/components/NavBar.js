import React from "react";
import { useEffect } from "react";

const NavBar = (props) => {

    // destructure props
    const { links } = props;

    // keep track of NavBar position, change if moved from initial position
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          const scrolledClass = 'scrolled';
          const scrollPosition = window.scrollY;
    
          if (scrollPosition > 0) {
            navbar.classList.add(scrolledClass);
          } else {
            navbar.classList.remove(scrolledClass);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    // return a NavBar Component (HTML/JSX)
    return (
        <div className="navBar" id="navbar">
            <h3 id="navBar-title">Bite Me Burgers</h3>
            <div className="navBar-links">
                {links.map((link, index) => {

                    // return an anchor tag for each link
                    return (<a key={index} href={link.url}>{link.name}</a>);
                })}
            </div>

        </div>
    );
};


export default NavBar;