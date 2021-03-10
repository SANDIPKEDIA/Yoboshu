import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div id='about-image'>
            <img src={props.image} alt='' />
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>{props.para}</p>
            < a href='https://play.google.com/store/apps/details?id=in.yoboshu.yoboshu'><button>{props.button}</button></a>        
        </div>

    </div>
  );
}

export default About;
