import React from 'react';
import Navbar from './Navbar';


function Header() {
    return (
        <div id ='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>YOBOSHU</span>&nbsp;Find Trainers & Workout From Anywhere</h1>
                <p className='details'> Our tainers can train you anywhere be it in your home,park,office or outdoors.We provide VIRTUAL and IN-PERSON training both.</p>
                <a href='https://play.google.com/store/apps/details?id=in.yoboshu.yoboshu' className='cv-btn'>Download App</a>
                
            </div>

        </div>
    )
}
export default Header;