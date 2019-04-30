import React from 'react';

import Button from './components/Button';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header >
        <NavBar />
        <Button label={'ciao'} />

      </header>
    </div>
  );
}

export default App;