import React from 'react';

function Footer() {
  return (
    <div id='contact'>
        <p>Copyright &nbsp;©<a href="https://yoboshu.com/">&nbsp;Yoboshu Pvt Ltd.</a> All rights rserved</p>
        <div className='contact-input'>
            <input type="email" placeholder='example@gmail.com'></input>
            <a href='#'>contact</a>
        </div>
    </div>
  );
}

export default Footer;
