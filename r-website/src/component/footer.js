import React from "react";
import '../css/footer.css';
class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
        <p>Author: {this.props.Name}</p>
        <p><a href={"mailto:"+this.props.email}>{this.props.email}</a></p>
        </footer>
      )
      
    }
  }
  export default Footer;