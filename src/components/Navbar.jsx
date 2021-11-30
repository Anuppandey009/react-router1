import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "500 px",
        marginLeft: "28%"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">ContactUs</Link>
      <Link to="/users">User</Link>
    </div>
  );
};
