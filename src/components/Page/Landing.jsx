import Hero from "../Layout/Hero";
import { Link } from "react-router";
function Landing() {
  return (
    <>
      <div className="main main--landing hero-complex"> {/*Prueba para la landing*/}
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
