import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const myGreeting: string = 'Hey m8! ^_^';

  console.log('greeting:', myGreeting);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello from AoT ^_^</div>} />
      </Routes>
    </Router>
  );
};

export default App;
