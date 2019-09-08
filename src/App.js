import React from 'react';

import Palette from './components/Palette';

import { generatePalette } from './colorHelpers';

import seedColors from './seedColors';
import './App.css';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
