import Sidebar from "./components/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row h-screen">
        <div className="basis-1/6 bg-sky-500">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
