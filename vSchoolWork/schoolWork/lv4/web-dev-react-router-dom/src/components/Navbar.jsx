import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/inventory">
        <button>Inventory</button>
      </Link>
    </div>
  );
}

export default Navbar;
