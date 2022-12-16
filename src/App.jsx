import "./App.css";
import { Routes, Route } from "react-router-dom";
import AsidebarAdmin from "./components/admin/asidebar/AsidebarAdmin";
import InvAsidebar from "./components/investor/asidebar/InvAsidebar";

function App() {
  return (
    <div className="App">
      {/* <AsidebarAdmin /> */}
      <InvAsidebar />
    </div>
  );
}

export default App;
