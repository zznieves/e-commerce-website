import React from "react";

const MenuItem = (props) => {

    // destructure props
    const { item, index } = props;

    // return a MenuItem Component(HTML/JSX)
    return (
        <div className="menu-item" key={index}>

            <div className="menu-item-photo">
            <img src={item.photo} alt="" />
            </div>

            <div className="menu-item-info">
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
        </div>
    );
};



export default MenuItem;