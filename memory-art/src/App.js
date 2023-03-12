import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/angel.jpg", matched: false },
  { src: "/img/moulin.jpg", matched: false },
  { src: "/img/children.jpg", matched: false },
  { src: "/img/arbore.jpg", matched: false },
  { src: "/img/cassatt.jpg", matched: false },
  { src: "/img/forest.jpg", matched: false },
  { src: "/img/gauguin.jpg", matched: false },
  { src: "/img/gwen.jpg", matched: false },
  { src: "/img/kisling.jpg", matched: false },
  { src: "/img/maurice.jpg", matched: false },
  { src: "/img/monet.jpg", matched: false },
  { src: "/img/morrisot.jpg", matched: false },
  { src: "/img/players.jpg", matched: false },
  { src: "/img/starry.jpg", matched: false },
  { src: "/img/sun.jpg", matched: false },
  { src: "/img/sunflowers.jpg", matched: false },
  { src: "/img/suzanne.jpg", matched: false },
  { src: "/img/van-gogh.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Memory Art</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p> Turns: {turns}</p>
    </div>
  );
}

export default App;
