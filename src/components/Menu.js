import React from 'react';

// burger images
import ClassicPatty from '../assets/msPattyBurger.jpg';
import BeefBomb from '../assets/beefBombBurger.jpg';
import TheSheriff from '../assets/sheriffBurger.jpg';
import MenuItem from './MenuItem';

// fry images
import ClassicFries from '../assets/classicFries.jpg';
import ChiliCheeseFries from '../assets/chiliCheeseFries.jpg';
import SweetPotatoFries from '../assets/sweetPotatoFries.jpg';

// drink images
import Sodas from '../assets/soda.jpg';
import Lemonades from '../assets/lemonade.jpg';
import Beer from '../assets/beer.jpg';

// dessert images
import Brownie from '../assets/brownies.jpg';
import ApplePie from '../assets/applePie.jpg';
import CheeseCake from '../assets/cheeseCake.jpg';

const Menu = () => {

    // menu items

    // burger menu
    const burgerMenu = [
        {
            name: 'The Classic Patty',
            photo: ClassicPatty,
            info: '',
            price: 10
        },
        {
            name: 'The Beef Bomb',
            info: '',
            photo: BeefBomb,
            price: 12
        },
        {
            name: 'The Sheriff',
            info: '',
            photo: TheSheriff,
            price: 15
        }
    ];

    // Fry Menu
    const fryMenu = [
        {
            name: 'Classic Fries',
            info: '',
            photo: ClassicFries,
            price: 5
        },
        {
            name: 'Chili Cheese Fries',
            info: '',
            photo: ChiliCheeseFries,
            price: 10
        },
        {
            name: 'Sweet Potato Fries',
            info: '',
            photo: SweetPotatoFries,
            price: 8
        }
    ];

    // Drink Menu
    const drinkMenu = [
        {
            name: 'Sodas',
            info: '',
            photo: Sodas,
            price: 5
        },
        {
            name: 'Lemonades',
            info: '',
            photo: Lemonades,
            price: 7
        },
        {
            name: 'Homebrew Beer',
            info: '',
            photo: Beer,
            price: 8
        }
    ];

    // Dessert Menu
    const dessertMenu = [
        {
            name: 'Brownie Stack',
            info: '',
            photo: Brownie,
            price: 10
        },
        {
            name: 'Apple Pie',
            info: '',
            photo: ApplePie,
            price: 10
        },
        {
            name: 'Cheesecake',
            info: '',
            photo: CheeseCake,
            price: 10
        }
    ];

    // return a Menu Component(HTML/JSX)
    return(
        <div className='menu' id='Menu'>

            <h3>Burgers</h3>
            <div className='menu-category' id='burger-menu'>
                {burgerMenu.map((item, index) => {

                    // return a MenuItem Component for each JavaScript Object in the Array
                    return (
                    <MenuItem 
                        index={index}
                        item={item} 
                    />
                    );
                })}
            </div>

            <h3>Fries</h3>
            <div className='menu-category' id='fry-menu'>
                {fryMenu.map((item, index) => {

                    // return a MenuItem Component for each JavaScript Object in the Array
                    return (
                    <MenuItem 
                        itemKey={index}
                        item={item} 
                    />
                    );
                })}
            </div>

            <h3>Drinks</h3>
            <div className='menu-category' id='drink-menu'>
                {drinkMenu.map((item, index) => {

                    // return a MenuItem Component for each JavaScript Object in the Array
                    return (
                    <MenuItem 
                        itemKey={index}
                        item={item} 
                    />
                    );
                })}
            </div>

            <h3>Dessert</h3>
            <div className='menu-category' id='dessert-menu'>
                {dessertMenu.map((item, index) => {

                    // return a MenuItem Component for each JavaScript Object in the Array
                    return (
                    <MenuItem 
                        itemKey={index}
                        item={item} 
                    />
                    );
                })}
            </div>

        </div>
    );
};

export default Menu;