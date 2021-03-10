import React from 'react';
import Header from './Components/Header';


import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/yoboshu_about.png';
import aboutimage1 from './images/tools.png';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='About YOBOSHU PRIVATE LIMITED' para='YOBOSHU PRIVATE LIMITED is a Private company incorporated on Thursday, 03 October 2019. It is classified as Non-government company and is registered at Registrar of Companies, HIMACHALPRADESH.Yoboshu is wellness and behavioral tech company. We are leveraging technologies to build a marketplace for personal training.' button='Get the App'/>
      <About image={aboutimage1} title='WHY CHOOSE YOBOSHU?' para='&nbsp;We provide FITNESS TOOLS. User our in-build fitness tools such as BMI calculator,Macro calculator,calorie tracker etc. Also currently we provide the following services:&nbsp;
1.&nbsp;Money Back Gurantee
2.&nbsp;Certified Trainer
3.&nbsp;Flexible Pricing
& Many more Features we have. To know More about YOBOSHU & want to stay fit please download YOBOSHU'
 button='Download App'/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
