// We can use the output like a HTML Syntax which JSK Allows us to do
//Reusable component CoreConcept

// We can use the props keyword to accept props
// function CoreConcept (props) {
//   return (
//     <li>
//       <img src={props.image} alt = {props.title}/>
//       <p>{props.title}</p>
//       <p>{props.description}</p>
//     </li>
//   )
// }

// We can also use object desctructing to accept props which will let us to write less code
export default function CoreConcept ({image,title,description}) {
    return (
      <li>
        <img src={image} alt = {title}/>
        <p>{title}</p>
        <p>{description}</p>
      </li>
    )
  }
  