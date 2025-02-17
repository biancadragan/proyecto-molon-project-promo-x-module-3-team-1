import Hero from "../Layout/Hero";
import { Link } from "react-router";
function Landing() {
  return (
    <>
      <Hero>
        <Link className="button--link" to="/MainPage">
          Nuevo proyecto
        </Link>
      </Hero>
    </>
  );
}

export default Landing;
