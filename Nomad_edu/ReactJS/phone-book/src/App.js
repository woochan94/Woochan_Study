import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2 
  state = {
    information : [
      {
        id : 0,
        name : '정우찬',
        phone : '010-0000-0000'
      }, 
      {
        id : 1,
        name : '우찬쓰',
        phone : '010-1111-1111'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state; 
    this.setState({
      information : information.concat({ id: this.id++, ...data })
    })
  }
  render() {

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data = {this.state.information} />
      </div>
    );
  }
}

export default App;
