import { Link } from "react-router-dom";

function Navbar() {
return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
    <Link to="/Counter">Counter</Link>   |{" "}
    <Link to="/Users">Users</Link>       |{" "}
    <Link to="/ProductList">ProductList</Link>     |{" "}
    <Link to="/Cart">Cart</Link>
    </nav>
);
}

export default Navbar;
