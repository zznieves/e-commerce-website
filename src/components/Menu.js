import React from 'react';
import MenuItem from './MenuItem';

import MsPattyBurger from '../assets/msPattyBurger.jpg';
import BeefBurgerBomb from '../assets/beefBombBurger.jpg';
import SheriffBurger from '../assets/sheriffBurger.jpg';

const Menu = () => {

    // burger menu data
    const burgers = [
        {
            name: 'Ms.Patty',
            info: `Perfectly seasoned all-beef patty, cooked to perfection, lettuce, tomato, cheese, 
                    and ketchup nestled between two freshly baked brioche buns.`,
            photo: MsPattyBurger,
            price: 11.00
        },
        {
            name: 'The Beef Bomb',
            info: `Brace yourself for an explosion of bold and savory flavors.
                    All-beef patty, special sauce, smoky bacon, melted aged cheddar cheese, lettuce, tomato, and red onions
                    served on toasted artisan bread.`,
            photo: BeefBurgerBomb,
            price: 12.00
        },
        {
            name: 'The Sheriff',
            info: `A tribute to the legendary lawmen of yesteryears.
                    Perfectly seasoned handcrafted beef patty topped with thick-cut bacon, melted pepper jack cheese for spice.
                    Topped with a zesty signature barbecue sauce and served on a toasted Kaiser roll.`,
            photo: SheriffBurger,
            price: 15.00
        }
    ];

    // return a Menu Component(HTML/JSX)
    return (
        <div className='menu'>

            <h3>Classic Burgers</h3>

            <div className='classic-burgers'>
                    {burgers.map((burger, index) => {

                        // for each burger, return an image for it
                        return <MenuItem key={index} item={burger} />
                    })}
            </div>

        </div>
    );
};

export default Menu;