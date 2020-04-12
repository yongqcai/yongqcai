import React from 'react';
import ReactDOM from 'react-dom';

import { Globalstyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <IconfontStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
