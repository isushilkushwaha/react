import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserName() {
const userName = useContext(UserContext);

return <h4>User Name: {userName}</h4>;
}

export default UserName;
