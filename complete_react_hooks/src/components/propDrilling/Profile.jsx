import UserName from "./UserName";

function Profile({ userName }) {
return (
    <div>
    <h3>Profile Component</h3>
    <UserName userName={userName} />
    </div>
);
}

export default Profile;
