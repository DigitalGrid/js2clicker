import React from "react";
import Clicker from "./clicker"
import Score from "./score"
import Upgrades from "./upgrades";
import Upgrade from "./upgrade";

/**
 * The App module builds the whole application
 */
export default class App extends React.Component {
  
  /**
   * Constructor of the Class App
   */
  constructor() {
    super();
    this.state = {
      incrementBy: 0,
      amount: 0
    }
    
    this.buyUpgrade = this.buyUpgrade.bind(this);
    this.addAmount = this.addAmount.bind(this);
  }
  
  /**
   * The render method
   */
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-3 center">
          <Clicker addAmount={this.addAmount} />
        </div>
        <div className="pure-u-1-3 center">
          <Score amount={this.state.amount} addAmount={this.addAmount} />
        </div>
        <div className="pure-u-1-3 center">
          <Upgrades key={"upgrades-1"} buyUpgrade={this.buyUpgrade} amount={this.state.amount}/>
        </div>
      </div>
    );
  }
  
  /**
   * Buy an upgrade if amount is high enough too increase auto incrementing
   * @param cost - The cost of the upgrade
   * @param incValue - How much the auto increment should increase
   */
  buyUpgrade(cost, incValue) {
    if(this.state.amount >= cost) {
      this.setState({
        incrementBy: this.state.incrementBy+incValue,
        amount: this.state.amount-cost
      })
      return true;
    }
    return false;
  }
  
  /**
   * Add points to the total amount
   * @param toAdd - How much to add if set. else adds from the auto increment value
   */
  addAmount(toAdd) {
    if(toAdd) {
      this.setState({
        amount: this.state.amount+toAdd
      })
    } else {
      this.setState({
        amount: this.state.amount+this.state.incrementBy
      })
    }
  }
  
}
