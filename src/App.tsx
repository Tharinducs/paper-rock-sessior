import React from 'react'
import logo from './logo.svg';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStor } from './store/store';
import { AppRoutes } from './Routes';

function App() {
  return (
    <>
      <PersistGate loading={null} persistor={persistStor}>
        <div className="App">
          <AppRoutes />
        </div>
      </PersistGate>
    </>
  );
}

export default App;
