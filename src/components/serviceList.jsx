import { useState } from 'react'; 

import ServiceListItem from './serviceListItem'

import '../styles/serviceList.css'

export default function ServiceList() {
  // list out the different services on left, 
  // right side will be photo slide
  // this componenet will have state and state will dictate which phots
  // animation added to list
  const serviceList = [
    {id: 1, name: 'Makeup & Hair', photo: 'bannerimgs/dresssample.jpg', selected: false}, 
    {id: 2, name: 'Wedding Dress Rentals', photo: 'bannerimgs/flowersample.jpg', selected: false}, 
    {id: 3, name: 'Wedding Decorations', photo: 'bannerimgs/makeupsample.jpg', selected: false}];
  
  const [state, setState] = useState(serviceList)

  const parsedServiceList = serviceList.map(service => {
    // const cssClass = setClass(service);
    return (<ServiceListItem service={service} onClick={setState} state={state}/>)
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