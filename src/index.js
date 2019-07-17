import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';

import App from './Components/App';
import reducers from './reducers';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App/>
</Provider>, 
document.getElementById('root'))