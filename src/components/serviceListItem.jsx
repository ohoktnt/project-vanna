
export default function ServiceListItem(props) {
  // should be the button for each service item
  // on click will set the state for slides

  const name = props.service.name;

  
  function setClass(){
    let cssClass;
    if (props.service === props.state) {
      cssClass = 'selectedService';
    } else {
      cssClass = 'serviceItem';
    }
    return cssClass;
  }

  
  return (
    <p className={setClass()} onClick={() => props.onClick(props.service)}> { name }</p>
  )

}