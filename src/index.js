import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const App = () => 'Hello world'

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();