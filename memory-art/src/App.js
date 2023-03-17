import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setCards, setScore } from "./redux/cardSlice";

function App() {
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const cards = useSelector((state) => state.cards.items);
  const score = useSelector((state) => state.cards.score);
  const dispatch = useDispatch();

  const shuffleCards = () => {
    const shuffledCards = [...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4(), matched: false }));

    setChoiceOne(null);
    setChoiceTwo(null);
    dispatch(setCards(shuffledCards));
    setTurns(0);
  };

  const handleChoice = (card) => {
    if (choiceOne && choiceOne.id !== card.id) {
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        dispatch(
          setCards([
            ...cards.map((card) => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            }),
          ])
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, dispatch]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    // const isGameOver =  cards.length !== 0 && cards.every((card) => card.matched === true);
    // if (isGameOver) {
    const userScore = 1200 - 15 * (turns * 2 - 24);
    if (userScore > 0) dispatch(setScore(userScore));
    // }
  }, [cards, turns, dispatch]);

  return (
    <div className="App">
      <h1>Memory Art</h1>
      <h5>Your Score: {score}</h5>
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
