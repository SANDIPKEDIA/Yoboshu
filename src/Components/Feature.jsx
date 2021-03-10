import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/trainer.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/background.png';


function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='AMIT NANDAN' p1='Experience:10&nbsp;+years' p2='Aerobics,Dance,Zumba,Bhangra' p3='Online(Google Meet)'p4='₹600/session'/>
                <FeatureBox image={featureimage1} title='SURAJ KUMAR' p1='Experience:5&nbsp;+years' p2='Gym,Yoga,Boxing,Sports' p3='Online(Google Meet)'p4='₹150/session'/>
                <FeatureBox image={featureimage2} title='PURSHOTTAM DAS' p1='Experience:3&nbsp;+years' p2='Gym,Cardio,Boxing,HIIT' p3='In Home' p4='₹300/session' />
            </div>
            </div>
    )
}
export default Feature;