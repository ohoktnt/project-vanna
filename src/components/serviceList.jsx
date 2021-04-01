import { useEffect, useState } from 'react'; 

import ServiceListItem from './serviceListItem'

import '../styles/serviceList.css'

export default function ServiceList() {
  // list out the different services on left, 
  // right side will be photo slide
  // this componenet will have state and state will dictate which phots
  // animation added to list
  const serviceList = [
    {id: 1, name: 'Makeup & Hair', photo: 'bannerimgs/dresssample.jpg', isSelected: false}, 
    {id: 2, name: 'Wedding Dress Rentals', photo: 'bannerimgs/flowersample.jpg', isSelected: false}, 
    {id: 3, name: 'Wedding Decorations', photo: 'bannerimgs/makeupsample.jpg', isSelected: false} ];
  
  const [state, setState] = useState(serviceList)
 
  
  const parsedServiceList = serviceList.map(service => {
    let serviceItemClass = 'service-item';
    if(state === service) {
      serviceItemClass += ' selected-service';
    }
    return (<ServiceListItem service={service} onClick={setState} className={serviceItemClass}/>)
  })

  function selectService(service) {
    const selectedID = service.id;
    const newServiceList = serviceList.filter(service => service.id !== selectedID);
    newServiceList.push(service)
    
  }

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