import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//all components
import Loading from "./components/Loading";

//all pages
import HomePage from "./pages/HomePage";
const AddNewmoviePage = lazy(() => import("./pages/AddNewMoviePage"));

//import AddNewmoviePage from "./pages/AddNewMoviePage";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<AddNewmoviePage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
