import { NavLink, useNavigate } from "react-router-dom";

export default function NavHeader() {
  const navigate = useNavigate();
  return (
    <nav>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Gå Tilbage
      </button>
      <ul>
        <li className="custom-tab">
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="/products">Produkter</NavLink>
        </li>
      </ul>
    </nav>
  );
}
