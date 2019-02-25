import React, { Component } from 'react';

class Counter extends Component {

    // state를 정의할 때는 class fields 문법을 사용해서 정의한다. 
    // class fields를 사용하지 않는다면 constructor를 사용해야 함 
    state = {
        number : 0
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('conponentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5의 배수라면 리렌더링 하지 않음 
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
      }
      
      componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
      }

    handleIncrease = () => {
        // state에 있는 값을 바꾸기 위함 
        // setState가 호출되면 컴포넌트가 리렌더링 됨 
        // setState는 객체로 전달되는 값만 업데이트 해줌 
        this.setState({
            number : this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number : this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <h1> 카운터 </h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
            </div>
        );
    }
}

export default Counter;