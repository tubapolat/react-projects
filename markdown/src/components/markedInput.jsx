import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setMarkdownText } from "../redux/markdownSlice";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export function MarkedInput() {
  const markdownText = useSelector((state) => state.markdown.markdownText);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    dispatch(setMarkdownText(newValue));
  };

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea value={markdownText} onChange={onInputChange} />
    </Container>
  );
}
