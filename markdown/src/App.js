import "./styles.css";
import styled from "styled-components";
import { MarkedInput } from "./components/markedInput";
import { Result } from "./components/result";

import { useState } from "react";
import EditorContext from "./editorContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "lato", sans-serif;
  margin-bottom: 1em;
  text-align: center;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const sample = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
 `;

export default function App() {
  const [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText,
  };
  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <button
          onClick={() => {
            setMarkdownText(sample);
          }}
        >
          ?
        </button>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}
