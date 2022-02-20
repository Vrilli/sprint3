import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom";
import {RegistroApp} from './RegistroApp';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <RegistroApp />
  </Provider>,
  document.getElementById('root')
)


