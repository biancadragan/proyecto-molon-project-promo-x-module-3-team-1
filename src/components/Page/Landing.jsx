import Hero from "../Layout/Hero";
import { Link } from "react-router";
function Landing() {
  return (
    <>
      <section className="main hero-complex">
        <Hero>
          <Link className="button--link" to="/MainPage">
            Nuevo proyecto
          </Link>
        </Hero>
      </section>
    </>
  );
}

export default Landing;
