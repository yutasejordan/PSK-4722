import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h2>About</h2>
      <ul>
        <li>
          <Link to="tes">Tes</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default About;
