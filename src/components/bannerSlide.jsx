import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';

import 'react-awesome-slider/dist/styles.css';
import '../styles/banner.css';


export default function BannerSlide() {
 const slider = (
   <div className="banner">
    <AwesomeSlider>
      <div id="banner-imgs" data-src="bannerimgs/makeupsample.jpg" />
      <div id="banner-imgs" data-src="bannerimgs/dresssample.jpg"/>
      <div id="banner-imgs" data-src="bannerimgs/flowersample.jpg"/>
    </AwesomeSlider>
   </div>
 )

 return slider

}