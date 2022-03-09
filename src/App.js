import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//all pages
import HomePage from "./pages/HomePage";
const AddNewmoviePage = lazy(() => import("./pages/AddNewMoviePage"));
//import AddNewmoviePage from "./pages/AddNewMoviePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<AddNewmoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
