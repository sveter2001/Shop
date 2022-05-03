import React from 'react';
import { render } from 'react-dom'

import { createStore } from 'redux'

import './index.css';
import App from './App';

import ecomApp from './reducers'

const store = createStore(ecomApp)

render(<App store={store} />, document.getElementById('root'));
