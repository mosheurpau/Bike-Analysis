import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Header></Header>} />
      </Routes>
    </div>
  );
}

export default App;
