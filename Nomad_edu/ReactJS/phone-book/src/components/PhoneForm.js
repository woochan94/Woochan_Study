import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
    }


    handleChange = (e) => {
        console.log(e);
        this.setState({
            name: e.target.value    // 이벤트 객체에 담겨있는 현재의 텍스트 값을 가져올 수 있다. 
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="이름" value={this.state.name} onChange={this.handleChange} />  
                    <div>{this.state.name}</div>
                </form>
            </div>
        );
    }
}

export default PhoneForm;