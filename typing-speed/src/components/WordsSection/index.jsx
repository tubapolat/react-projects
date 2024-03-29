import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentWord } from "../../redux/WordSlice";

export const WordsSection = () => {
  const { words, wordIndex, tickStatus } = useSelector(
    (state) => state.typingSpeed
  );
  const [number, setNumber] = useState(0);
  const [someWords, setSomeWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (wordIndex % 20 === 0) {
      setNumber(wordIndex);
      setCurrentIndex(wordIndex);
    }
    setSomeWords(words.slice(number, 20 + number));
  }, [words, number]);

  useEffect(() => {
    let currentId = wordIndex;
    currentId === 20 ? (currentId = 0) : (currentId = wordIndex % 20);
    someWords.length !== 0 ??
      dispatch(setCurrentWord(someWords[currentId].english));
  }, [wordIndex, dispatch, someWords]);
  return (
    <div className="w-10/12 h-[100px] bg-white mt-4 flex items-center justify-center rounded-md">
      <p className="w-full h-full flex flex-wrap items-center justify-start">
        {someWords.map((word, index) => {
          return (
            <span
              key={index}
              className={`px-1 text-xl  ${
                wordIndex === currentIndex + index
                  ? tickStatus === true
                    ? "bg-red-500 p-1 rounded mx-1 text-white"
                    : "bg-slate-400 p-1 rounded mx-1 text-white"
                  : word.status === "correct"
                  ? "text-green-500"
                  : word.status === "wrong"
                  ? "text-red-500"
                  : "text-slate-800"
              } ${word.status === "correct" ? "text-green-500" : ""} ${
                word.status === "wrong" ? "text-red-500" : ""
              }`}
            >
              {word.english}
            </span>
          );
        })}
      </p>
    </div>
  );
};
