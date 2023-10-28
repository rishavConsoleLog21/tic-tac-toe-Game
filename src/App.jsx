import Players from "./components/Players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Players initialName='P1' symbol="X" />
        <Players initialName='P2' symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
