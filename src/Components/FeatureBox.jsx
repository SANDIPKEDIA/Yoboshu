import React from 'react';


function FeatureBox(props) {
    return (
       
            <div className='a-box'>
                <div className='a-b-img'>
                    <img src={props}/>

                </div>
                <div className='s-b-text'>
                    <h2>{props.title}</h2>
                  <p><b>{props.p1}</b></p>
                  <p>{props.p2}</p>
                  <p>{props.p3}</p>
                  <p><b>{props.p4}</b></p>
                  <a href='https://play.google.com/store/apps/details?id=in.yoboshu.yoboshu' className='cv-btn'>BOOK</a>
                </div>
                
                
            </div>  
            
    )
}
export default FeatureBox;