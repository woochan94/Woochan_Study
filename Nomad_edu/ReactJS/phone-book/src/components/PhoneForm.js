import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: ''
    }


    // input의 값이 여러개 일 때는 input의 name속성을 사용한다. 
    // name 값은 event.target.name을 통해서 조회할 수 있다. 
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
            // name: e.target.value    // 이벤트 객체에 담겨있는 현재의 텍스트 값을 가져올 수 있다. 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지 
        this.props.onCreate(this.state); // 상태값을 onCreate를 통하여 부모에게 전달 
        // 상태 초기화 
        this.setState({
            name : '',
            phone : ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="이름" value={this.state.name} onChange={this.handleChange} name ="name" />  
                    <input placeholder="전화번호" value={this.state.phone} onChange={this.handleChange} name = "phone" />
                    <button type="submit">등록</button>
                </form>
            </div>
        );
    }
}

export default PhoneForm;