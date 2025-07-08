import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import CreateTournamentPage from "./components/CreateTournamentPage/CreateTournamentPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/createTournamentPage"} element={<CreateTournamentPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
