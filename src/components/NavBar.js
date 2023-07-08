import React from "react";

const NavBar = (props) => {

    // destructure props: get links for NavBar
    const { links } = props;

    // return a NavBar Component
    return (
        <div className="navBar">
            {links.map((link, index) => {
                
                // return an anchor tag for each link
                return <a key={index} href={link.url}>{link.title}</a>
            })}
        </div>
    );
};

export default NavBar;