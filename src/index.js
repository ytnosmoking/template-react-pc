import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import store from 'store/index'
import { ConfigProvider } from 'antd'
import zhCn from 'antd/lib/locale/zh_CN'

ReactDOM.render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCn}>
    <Provider store={store} >
      <App />
    </Provider>
  </ConfigProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
