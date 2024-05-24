import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import EditableTable from './EditableTable';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <EditableTable />
    </React.StrictMode>
  </Provider>
);
