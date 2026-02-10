import Profile from "./Profile";

function Dashboard({ userName }) {
return (
    <div>
    <h2>Dashboard Component</h2>
    <Profile userName={userName} />
    </div>
);
}

export default Dashboard;
