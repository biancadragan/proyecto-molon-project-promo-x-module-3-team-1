import { Link } from "react-router";
import PropTypes from "prop-types";
import Form from "../Projects/Form";
import Hero from "../Layout/Hero";
import Preview from "../Projects/Preview";

function MainPage({
  formData,
  handleInputChange,
  handleClickSave,
  errors,
  validateForm,
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
        handleClickSave={handleClickSave}
        errors={errors}
        validateForm={validateForm}
      />
    </>
  );
}

MainPage.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleClickSave: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  validateForm: PropTypes.func.isRequired,
};

export default MainPage;
