import React from "react";
import Upgrade from "./upgrade";

/**
 * The Upgrades module - Parent to (all) the Upgrade(s) component. Instantiate all the Upgrade(s)
 */
export default class Upgrades extends React.Component {
  
  /**
   * The render method
   */
  render() {
    return (
      <div className="upgrades">
        <Upgrade 
          key={"upg-1"}
          buyUpgrade={this.props.buyUpgrade} 
          incValue={0.1} 
          incUpgradeCost={10} 
          name={"Wooden Spoon"}
          startUpgradeCost={10}
          amount={this.props.amount}
          img={"upg1.png"}
        />
        <Upgrade
          key={"upg-2"}
          buyUpgrade={this.props.buyUpgrade} 
          incValue={0.4} 
          incUpgradeCost={35} 
          name={"Spatula"}
          startUpgradeCost={50}
          amount={this.props.amount}
          img={"upg2.png"}
        />
        <Upgrade
          key={"upg-3"}
          buyUpgrade={this.props.buyUpgrade} 
          incValue={1} 
          incUpgradeCost={50} 
          name={"Balloon Whisk"}
          startUpgradeCost={200}
          amount={this.props.amount}
          img={"upg3.png"}
        />
        <Upgrade
          key={"upg-4"}
          buyUpgrade={this.props.buyUpgrade} 
          incValue={5} 
          incUpgradeCost={100} 
          name={"Rolling Pin"}
          startUpgradeCost={800}
          amount={this.props.amount}
          img={"upg4.png"}
        />
        <Upgrade
          key={"upg-5"}
          buyUpgrade={this.props.buyUpgrade} 
          incValue={20} 
          incUpgradeCost={200} 
          name={"Cake Molds"}
          startUpgradeCost={2000}
          amount={this.props.amount}
          img={"upg5.png"}
        />
        <Upgrade
          key={"upg-6"}
          buyUpgrade={this.props.buyUpgrade} 
          incValue={200} 
          incUpgradeCost={1000} 
          name={"Electric Mixer"}
          startUpgradeCost={10000}
          amount={this.props.amount}
          img={"upg6.png"}
        />
      </div>
    );
  }
  
}
