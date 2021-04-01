import { useState } from 'react'

export default function ServiceListItem(props) {
  // should be the button for each service item
  // on click will set the state for slides
  // let serviceItemClass = 'service-item';

  // if(props.state === props.service) {
  //   serviceItemClass += ' selected-service';
  // }

  const name = props.service.name;

  return (
    <p onClick={() => props.onClick(props.service)} className={props.className}> { name }</p>
  )

}