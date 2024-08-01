import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <img src="/react-logo.png" width="40px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
