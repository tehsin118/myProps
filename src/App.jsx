import "./App.css";
import AsidebarAdmin from "./components/admin/asidebar/AsidebarAdmin";
import Admin from "./page/Admin";
import { Routes, Route } from "react-router-dom";
import AdminMessage from "./components/admin/message/AdminMessage";

function App() {
  return (
    <div className="App">
      <AsidebarAdmin />
      {/* <Admin /> */}
    </div>
  );
}

export default App;
