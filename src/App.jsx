import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Players initialName='P1' symbol="X" />
        <Players initialName='P2' symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
