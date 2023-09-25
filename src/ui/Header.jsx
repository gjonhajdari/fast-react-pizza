import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast react pizza CO.</Link>

      <SearchOrder />

      <p>Gjon</p>
    </header>
  );
}

export default Header;
