import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function Users() {
const dispatch = useDispatch();
const { data, loading, error } = useSelector(
    (state) => state.users
);

useEffect(() => {
    dispatch(fetchUsers());
}, [dispatch]);

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
    <div>
    <h2>User List</h2>
    {data.map((user) => (
        <p key={user.id}>{user.name}</p>
    ))}
    </div>
);
}

export default Users;
