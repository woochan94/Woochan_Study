import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render() 함수 
// 첫번째 파라미터 : 렌더링 할 결과물
// 두번째 파라미터 : 컴포넌트를 어떤 DOM에 그릴지 정해줌 

serviceWorker.unregister();
