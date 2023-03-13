import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setParagraphs } from "./redux/paragraphSlice";

function App() {
  const [numberOfParagraph, setNumberOfParagraph] = useState(4);
  const [includeHTML, setIncludeHTML] = useState("No");

  const dispatch = useDispatch();
  const paragraphs = useSelector((state) => state.paragraphs.items);

  useEffect(() => {
    fetch(
      `https://fakerapi.it/api/v1/texts?_quantity=${numberOfParagraph}&_characters=500`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch(setParagraphs(data.data.map((datum) => datum.content)))
      );
  }, [dispatch, numberOfParagraph]);

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark p-5">
        <div class="container-fluid">
          <h1 class="navbar-text">React Sample Text Generator</h1>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Paragraphs
          </span>
          <input
            type="number"
            min={1}
            max={10}
            class="form-control"
            placeholder="4"
            value={numberOfParagraph}
            onChange={(e) => {
              if (e.target.value > 0) setNumberOfParagraph(e.target.value);
            }}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Include HTML
          </span>
          <select
            class="form-select form-select-lg"
            aria-label=".form-select-lg example"
            value={includeHTML}
            onChange={(e) => setIncludeHTML(e.target.value)}
          >
            <option value={"No"}>No</option>
            <option value={"Yes"}>Yes</option>
          </select>
        </div>
      </nav>
      <div className="paragraph">
        {paragraphs.map((paragraph, index) => (
          <div key={index} class="card text-bg-info mb-3">
            <p>
              {(includeHTML === "Yes" ? "<p>" : "") +
                paragraph +
                (includeHTML === "Yes" ? "</p>" : "")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
