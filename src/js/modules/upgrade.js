import React from "react";

import ReactDOM from "react-dom";

/**
 * The Upgrade module - builds an upgrade
 */
export default class Upgrade extends React.Component {  
  
  /**
   * Constructor of the Class Upgrade
   */
  constructor(props) {
    super(props);
    this.state = {
      upgradeCost: this.props.startUpgradeCost,
      level: 0
    }
    this.handleClick = this.handleClick.bind(this);
    
    //this.upgradeInfo = this.upgradeInfo.bind(this);
  }
  
  /**
   * The render method
   */
  render() {
    return (
      <div className="upgrade">
        <div className="upgrade-btn pure-button pure-button-primary" disabled={this.props.amount < this.state.upgradeCost} onClick={this.handleClick}>
          <div className="upgrade-img">
            <img src={require("../../images/" + this.props.img)} />
          </div>
          <div className="upgrade-name">
            {this.props.name} 
          </div>
          <div className="upgrade-cost">
            <img className="cookie-icon" src={require("../../images/cookie.png")} />
            {this.state.upgradeCost} 
          </div>
          <div className="upgrade-level">  
            {this.state.level}
          </div>
        </div>
      </div>
    );
  }
  
  /**
   * If you got enough points then buy upgrade and increase the upgrade cost
   */
  handleClick() {
    if(this.props.buyUpgrade(this.state.upgradeCost, this.props.incValue)) {
      this.setState({
        upgradeCost: this.props.startUpgradeCost + this.props.incUpgradeCost + (this.props.incUpgradeCost*this.state.level),
        level: this.state.level + 1
      })
    }
  }

}
