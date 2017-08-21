import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';
import './style/reset.css'
import './style/custom.css'
import './style/react-table.css'
import './style/react-tab.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
