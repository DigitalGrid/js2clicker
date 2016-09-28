import React from "react";

/**
 * The Clicker module 
 */
export default class Clicker extends React.Component {  
  
  /**
   * Constructor of the Class Clicker
   */
  constructor() {
    super();
    this.state = {
      wobble: "",
      bigger: ""
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  /**
   * The render method
   */
  render() {
    return (
      <div className="clicker">
        <img className={this.state.wobble} onClick={this.handleClick} id="circle" src={require("../../images/cookie.png")} />
      </div>
    );
  }
  
  /**
   * Add points to the total amount and trigger wobble effect
   */
  handleClick() {
    var that = this;
    this.props.addAmount(1);
    this.setState({wobble: ""})
    setTimeout(function() {
      that.setState({wobble: "wobble"});
    },1);
  }  
}