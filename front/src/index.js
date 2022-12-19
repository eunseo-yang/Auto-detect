import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/index.scss";
//import registerServiceWorker from "./registerServiceWorker";

//리덕스 쓰고싶으면 밑에 두줄 주석 해제
import Root from "./Root";
import axios from "axios";
ReactDOM.render(<Root />, document.getElementById("root"));


//axios.defaults.baseURL = "";
//axios.defaults.withCredentials = true;

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//ReactDOM.render(<div>도현체</div>, document.getElementById("root"));
//registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
