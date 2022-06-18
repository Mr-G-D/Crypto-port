import Sidebar from "./components/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crypto from "./components/Crypto";

function App() {
  return (
    <div className="App min-h-screen max-h-screen">
      <Navbar />
      <div
        style={{
          height: "94vh",
        }}
        className="flex flex-row"
      >
        <div className="basis-1/6 bg-sky-500">
          <Sidebar />
        </div>
        <div className="basis-5/6 bg-slate-200">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/all" element={<Crypto />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
