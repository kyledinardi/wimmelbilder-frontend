import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';

function App() {
  const [isGame, setIsGame] = useState(false);
  const [characters, setCharacters] = useState(null);

  return (
    <>
      <Nav isGame={isGame} characters={characters} />
      <main>
        <Outlet context={[setIsGame, setCharacters]} />
      </main>
    </>
  );
}

export default App;
