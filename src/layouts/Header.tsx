import { Link } from "react-router-dom";
import { Home } from "react-feather";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <Home />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
