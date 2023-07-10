import React from "react";

const MenuItem = (props) => {


    // destructure props: get all menu-item data
    const { item } = props;


    // return a MenuItem Component(HTML/JSX)
    return (
        <div className="menu-item">

            <div className="image-container">
                <img className="item-photo" src={item.photo} alt="" />
                <div className="image-overlay"></div>
            </div>

            <p className="menu-item-name">
                {item.name}<br />
                {item.price}
            </p>

        </div>
    );
};

export default MenuItem;