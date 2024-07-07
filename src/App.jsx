import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';

function App() {
  const [isGame, setIsGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [characters, setCharacters] = useState(null);

  return (
    <>
      <Nav isGame={isGame} characters={characters} isGameOver={isGameOver} />
      <main>
        <Outlet
          context={[
            setIsGame,
            setCharacters,
            setIsGameOver,
            isGame,
            characters,
            isGameOver,
          ]}
        />
      </main>
    </>
  );
}

export default App;
