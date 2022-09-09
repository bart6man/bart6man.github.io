import Home from "./Pages/Home";
import Songs from "./Pages/Songs";
import Beats from "./Pages/Beats";
import Contacts from "./Pages/Contacts";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/songs" exact element={<Songs />}></Route>
        <Route path="/beats" exact element={<Beats />}></Route>
        <Route path="/contacts" exact element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
