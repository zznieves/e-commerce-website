import React from 'react';

const Header = () => {

    // return a Header Component(HTML/JSX)
    return (
        <div className='header shared-background'>
            
            <div className='header-title'>
                <h1 id='rest-title-h1'>Bite Me Burgers</h1>
                <p>
                Where passion meets taste and every bite is a journey.
                </p>
                <button className='button' id='headerBtnMenu'>View The Menu</button>
            </div>

        </div>
    );
};



export default Header;