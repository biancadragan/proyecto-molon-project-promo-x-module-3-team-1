import Hero from "../Layout/Hero";
import { Link } from "react-router";
function Landing() {
  return (
    <>
      <div className="hero-complex">
        <Hero>
          <Link className="button--link" to="/MainPage">
            Nuevo proyecto
          </Link>
        </Hero>
      </div>
    </>
  );
}

export default Landing;
