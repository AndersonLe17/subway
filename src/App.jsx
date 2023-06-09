import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/"} element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
