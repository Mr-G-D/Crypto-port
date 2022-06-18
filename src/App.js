import Sidebar from "./components/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

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
        <div className="basis-1/4 bg-sky-500">
          <Sidebar />
        </div>
        <div className="flex-grow bg-slate-200">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
