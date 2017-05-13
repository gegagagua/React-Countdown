import React, { Component } from 'react';
import  './App.css';


class Clock extends Component {
  constructor( props ) {
      super( props );
      this.state = {
          days : 0,
          hours : 0,
          minutes : 0,
          secondes : 0
      }
  }

  componentWillMount() {
    this.getTimeUntill( this.props.deadline );
  }

  componentDidMount() {
    console.log( this.props );
    setInterval( () => this.getTimeUntill( this.props.deadline ), 1000 );
  }

  addZero( num ) {

    return num < 10 ? '0' + num : num;

  }

  getTimeUntill( deadline ) {

    const time    = Date.parse(deadline) - Date.parse( new Date() );
    const secondes= Math.floor( ( time / 1000 ) % 60 );
    const minutes = Math.floor( ( time / 1000 / 60 ) % 60 );
    const hours   = Math.floor( time / (1000 * 3600 ) % 24 );
    const days    = Math.floor( time / (1000 * 3600 * 24) );

    this.setState({
      days : days,
      hours : hours,
      minutes : minutes,
      secondes : secondes

    })

  }

  render() {

    // this.getTimeUntill( this.props.deadline );

    return (
      <div className="Clock-container">
        <div className="Clock-days"> { this.addZero( this.state.days ) } days </div>
        <div className="Clock-hours"> { this.addZero( this.state.hours ) } hours </div>
        <div className="Clock-minutes"> { this.addZero( this.state.minutes ) } minutes </div>
        <div className="Clock-secondes"> { this.addZero( this.state.secondes ) } secondes </div>
      </div>
    )
  }
}

export default Clock;
