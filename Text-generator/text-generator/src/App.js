import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
            type="text"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Include HTML
          </button>
          <ul class="dropdown-menu">
            <li>No</li>
            <li>Yes</li>
          </ul>
        </div>
      </nav>
      <div className="paragraph">
        <div class="card text-bg-info mb-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
