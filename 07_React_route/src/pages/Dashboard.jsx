import { Routes, Route, Link } from "react-router-dom";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

function Dashboard() {
  return (
    <div>
      <h1>📊 Dashboard</h1>

      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
