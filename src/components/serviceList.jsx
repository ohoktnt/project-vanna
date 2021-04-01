import { useState } from 'react'; 

import ServiceListItem from './serviceListItem'

import '../styles/serviceList.css'

export default function ServiceList() {
  // list out the different services on left, 
  // right side will be photo slide
  // this componenet will have state and state will dictate which phots
  // animation added to list
  const serviceList = [
    {id: 1, name: 'Makeup & Hair', photo: 'bannerimgs/dresssample.jpg'}, 
    {id: 2, name: 'Wedding Dress Rentals', photo: 'bannerimgs/flowersample.jpg'}, 
    {id: 3, name: 'Wedding Decorations', photo: 'bannerimgs/makeupsample.jpg'}];
  
  const [state, setState] = useState(serviceList[0])

  // make a function that sets state but also add class for styling

  function setClass(service){
    let cssClass;
    if (service === state) {
      cssClass = 'selectedService';
    } else {
      cssClass = 'serviceItem';
    }
    return cssClass;
  }

  const parsedServiceList = serviceList.map(service => {
    const cssClass = setClass(service);
    return (<ServiceListItem className={cssClass} service={service} onClick={setState} state={state}/>)
  })

  return (
    <div>
      <h1>Services</h1>
      <div className="service-list">
        <div>
          {parsedServiceList}
        </div>
        <img id="display" src={state.photo}/>
      </div>
    </div>
  )

}