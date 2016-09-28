import React from "react";

/**
 * The Score module - shows the score
 */
export default class Score extends React.Component {  
  
  /**
   * Constructor of the Class Score
   */
  constructor() {
    super();
    
    this.tick = this.tick.bind(this);
  }
  
  /**
   * Called when component has been loaded to the page. add points over time
   */
  componentDidMount() {
    this.timer = setInterval(this.tick, 100);
  }
  
  /**
   * Called after the component has been removen
   */
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  /**
   * Called over time to add points to the total amount
   */
  tick() {
    this.props.addAmount();
  }
  
  /**
   * The render method
   */
  render() {
    let score = Math.floor(this.props.amount);
    return (
      <div className="score">
        <h2>{score}</h2>
      </div>
    );
  }
  
}