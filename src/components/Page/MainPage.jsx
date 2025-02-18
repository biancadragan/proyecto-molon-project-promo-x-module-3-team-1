import { Link } from "react-router";
import PropTypes from "prop-types";
import Form from "../Projects/Form";
import Hero from "../Layout/Hero";
import Preview from "../Projects/Preview";

function MainPage({
  formData,
  handleInputChange,
  errors,
  validateForm,
  handleFetch,
  fetchError,
  projectUrl,
}) {
  return (
    <>
      <Hero>
        <Link className="button--link" to="/">
          Ver proyectos
        </Link>
      </Hero>
      <Preview formData={formData} />
      <Form
        formData={formData}
        handleInputChange={handleInputChange}
        errors={errors}
        validateForm={validateForm}
        handleFetch= {handleFetch}
        fetchError = {fetchError}
        projectUrl={projectUrl}
      />
    </>
  );
}

MainPage.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  validateForm: PropTypes.func.isRequired,
  handleFetch: PropTypes.func.isRequired,
  fetchError: PropTypes.string.isRequired,
};

export default MainPage;
