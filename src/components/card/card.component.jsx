import {Component} from "react";
import "./card.styles.css"

let Card = (props) =>{
  let {id, name, email} = props;
  return (
    <div className="card-container" key={id}>
      <img className="monster-img" src={`https://robohash.org/${id}`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// class Card extends Component {
//   render() {
//     let {id, name, email} = this.props;
//     return (
//       <div className="card-container" key={id}>
//         <img className="monster-img" src={`https://robohash.org/${id}`} alt={`monster ${name}`} />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
export default Card;