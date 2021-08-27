import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/cropperjs/dist/cropper.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/react-perfect-scrollbar/dist/css/styles.css';
import '../node_modules/react-data-table-component-extensions/dist/index.css';
import '../node_modules/driver.js/dist/driver.min.css';
import '../node_modules/devextreme/dist/css/dx.common.css';
import '../node_modules/devextreme/dist/css/dx.light.css';
import './assets/vendors/iconic-fonts/flat-icons/flaticon.css';
import './assets/vendors/iconic-fonts/cryptocoins/cryptocoins.css';
import './assets/vendors/iconic-fonts/cryptocoins/cryptocoins-colors.css';
import './assets/vendors/iconic-fonts/font-awesome/css/all.min.css';
import './assets/css/style.css';
import { registerServiceWorker } from './firebase/serviceworker';

ReactDOM.render(

  <App />
  ,
  document.getElementById('medboard')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker()