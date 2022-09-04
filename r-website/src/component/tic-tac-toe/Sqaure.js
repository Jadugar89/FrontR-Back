import React from "react";
import '../../css/square.css';
class Square  extends React.Component {
    state = {  }
    render() { 
        return (
            <button className="square">
            {this.props.value}
          </button>
          );
    }
}
 
export default Square;