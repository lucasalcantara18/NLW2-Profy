import React from 'react';

import './App.css';
import { RecoilRoot } from 'recoil';
import Routes from './routes';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </div>
  );
}

export default App;
