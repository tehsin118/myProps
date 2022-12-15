import "./App.css";
import AsidebarAdmin from "./components/admin/asidebar/AsidebarAdmin";
import Admin from "./page/Admin";
import { Routes, Route } from "react-router-dom";
import AdminMessage from "./components/admin/message/AdminMessage";
import InvAsidebar from "./components/investor/asidebar/InvAsidebar";

function App() {
  return (
    <div className="App">
      <AsidebarAdmin />
      {/* <InvAsidebar /> */}
    </div>
  );
}

export default App;
