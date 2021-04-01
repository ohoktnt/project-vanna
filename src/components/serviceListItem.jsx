
export default function ServiceListItem(props) {
  // should be the button for each service item
  // on click will set the state for slides

  const name = props.service.name;
  
  return (
    <p onClick={() => props.onClick(props.service)}> { name }</p>
  )

}