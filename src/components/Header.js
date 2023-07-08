import React from 'react';
import NavBar from './NavBar';

const Header = () => {

    // return a Header Component(HTML/JSX)
    return (
        <div className='header'>

            <div className='header-top'>

                <h3 id='rest-title-h3'>Bite Me Burgers</h3>
                <NavBar
                    links={[
                        {
                            title: 'Home',
                            url: '#Home'
                        },
                        {
                            title: 'About',
                            url: '#About'
                        },
                        {
                            title: 'Menu',
                            url: '#Menu'
                        },
                        {
                            title: 'Order',
                            url: '#Order'
                        },
                        {
                            title: 'Contact',
                            url: '#Contact'
                        }
                    ]}
                />

            </div>

            <div className='header-bottom'>
                <h1 id='rest-title-h1'>Bite Me Burgers</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Suspendisse faucibus ex ligula, eu feugiat turpis auctor et.<br />
                Aenean vel risus id elit egestas commodo.<br />
                </p>
                <button className='button' id='headerBtnMenu'>View The Menu</button>
            </div>

        </div>
    );
};



export default Header;