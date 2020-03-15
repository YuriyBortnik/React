import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(
//     <h1>hellow world!</h1>,
//     document.getElementById("root")
// );

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello</h1>
//             <h2>Time is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
//
// }
// setInterval(tick,1000);
//
// function Hellow(props) {
//     return <h1> Hellow, {props.name}</h1>
// }
//
// const elem = <Hellow name="Alex" />;
// ReactDOM.render(
//     <Hello />,
//     document.getElementById('root')
// );