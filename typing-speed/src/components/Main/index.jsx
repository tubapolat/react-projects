import React from "react";
import { Header } from "../Header";
import { InputArea } from "../InputArea";
import { WordsSection } from "../WordsSection";

export const Main = () => {
  return (
    <>
      <div className="min-w-[450px] h-[350px] bg-red-300 rounded drop-shadow-xl flex flex-col items-center justify-start">
        <Header />
        <WordsSection />
        <InputArea />
      </div>
    </>
  );
};
