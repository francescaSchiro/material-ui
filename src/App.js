import React from 'react';

import Button from './components/Button';
import NavBar from './components/NavBar';
// import ExpansionPanels from './components/ExpansionPanels';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Button label={'ciao'} />
      </header>
      <main>
        {/* <ExpansionPanels /> */}
      </main>
    </div>
  );
}

export default App;