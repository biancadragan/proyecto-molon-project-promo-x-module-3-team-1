import { Link } from "react-router";
import PropTypes from "prop-types";
import Form from "../Projects/Form";
import Hero from "../Layout/Hero";
import Preview from "../Projects/Preview";

function MainPage({
  formData,
  handleInputChange,
  errors,
  validatorForm,
  handleSubmit,
  fetchError,
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
        validatorForm={validatorForm}
        handleSubmit= {handleSubmit}
        fetchError = {fetchError}
      />
    </>
  );
}

MainPage.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  validatorForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fetchError: PropTypes.array.isRequired,
};

export default MainPage;
