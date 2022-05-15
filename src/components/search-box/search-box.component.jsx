//import { Component } from "react";
import './search-box.styles.css'

let SearchBox = (props) => {
  let {onChangeHandler, placeholder, className} = props;
  return(
    <input
    type="search"
    className={className}
    placeholder= {placeholder}
    onChange={onChangeHandler}
  />
  );
}

// class SearchBox extends Component {

//   render(){
//     let {onChangeHandler, placeholder, className} = this.props;
//     return(
//       <input
//       type="search"
//       className={className}
//       placeholder= {placeholder}
//       onChange={onChangeHandler}
//     />
//     );
//   }
// }

export default SearchBox;