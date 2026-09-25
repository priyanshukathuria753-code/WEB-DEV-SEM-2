import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Website</h2>

      <div style={styles.links}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "15px 30px",
  },

  logo: {
    color: "white",
  },

  links: {
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;