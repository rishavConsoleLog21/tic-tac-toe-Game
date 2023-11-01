import React, { useState } from "react";
import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectPlayer(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players initialName="P1" symbol="X" isActive={activePlayer === 'X'}/>
          <Players initialName="P2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectPlayer} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
