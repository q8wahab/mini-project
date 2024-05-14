import logo from "./logo.svg";
import "./App.css";
import PostList from "./compponent/PostList";

function App() {
  return (
    <div className="App">
      <h1>abdulwahab</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        <PostList />
      </div>
    </div>
  );
}

export default App;
