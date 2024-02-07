import DashboardLayout from "./Layout/DashboardLayout";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <DashboardLayout />
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
