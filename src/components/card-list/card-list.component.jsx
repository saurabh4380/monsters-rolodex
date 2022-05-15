//import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

let CardList = (props)=>{
    console.log("render from card-list");
    let { monsters } = props;
  return (
    <div className="card-list-container">
      <div className="card-list">
        {monsters.map((monster) => {
          let { id, name, email } = monster;
          return <Card id = {id} name= {name} email = {email} key={id}/>;
        })}
      </div>
    </div>
  );
}


// class CardList extends Component {
 
//   render() {
//     let { monsters } = this.props;

//     console.log(this.props);
//     console.log("render from card-list");
//     return (
//       <div className="card-list-container">
//         <div className="card-list">
//           {monsters.map((monster) => {
//             let { id, name, email } = monster;
//             return <Card id = {id} name= {name} email = {email} key={id}/>;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default CardList;

