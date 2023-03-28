import NavigatorBar from "./Components/navBar";
import SearchBar from "./Components/searchBar";
import "./styles.css";

export default function App() {
  return (
    <div>
      <NavigatorBar />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Burra</h2>
        <SearchBar />
      </div>
    </div>
  );
}
