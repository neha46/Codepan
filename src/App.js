
import './App.css';
import React from 'react';
import DataProvider from './component/context/DataProvider';

import Home from './component/Home';

function App() {
  return (
  
    <DataProvider>
    <Home/>
    </DataProvider>

  );
}

export default App;
