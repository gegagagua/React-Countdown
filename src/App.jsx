import React, { Component } from 'react';
import Clock from './Clock.jsx';
import  './App.css';
import { Button, Form, FormControl } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        deadline : 'May 28, 2017',
        newDeadline : ''
      }
    }

    changeDeadline() {
      this.setState({
        deadline : this.state.newDeadline
      })
    }

    changeVal( event ) {

      this.setState({
        newDeadline : event.target.value
      })

    }

    render() {
        return (
            <div className='App'>
              <div className='App-title'> Countdown to { this.state.deadline } </div>

              <Clock
                deadline={this.state.deadline}
              />

              <Form inline={true}>

                <FormControl placeholder='new date'
                       onChange={ (event) => this.changeVal( event ) } />
                       
                <Button
                  onClick={ () => this.changeDeadline() }>
                  submit
                </Button>

              </Form>
            </div>
        )
    }
}

export default App;
