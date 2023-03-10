import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/angel.jpg" },
  { src: "/img/moulin.jpg" },
  { src: "/img/children.jpg" },
  { src: "/img/arbore.jpg" },
  { src: "/img/cassatt.jpg" },
  { src: "/img/forest.jpg" },
  { src: "/img/gauguin.jpg" },
  { src: "/img/gwen.jpg" },
  { src: "/img/kisling.jpg" },
  { src: "/img/maurice.jpg" },
  { src: "/img/monet.jpg" },
  { src: "/img/morrisot.jpg" },
  { src: "/img/players.jpg" },
  { src: "/img/starry.jpg" },
  { src: "/img/sun.jpg" },
  { src: "/img/sunflowers.jpg" },
  { src: "/img/suzanne.jpg" },
  { src: "/img/van-gogh.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Memory Art</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
