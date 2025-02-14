import PropTypes from "prop-types";

function Form({ formData, handleInputChange, handleClickSave }) {
  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={formData.slogan}
          onChange={handleInputChange}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            value={formData.repo}
            onChange={handleInputChange}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            value={formData.demo}
            onChange={handleInputChange}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          value={formData.technologies}
          onChange={handleInputChange}
        />
        <textarea
          className="addForm__input"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          value={formData.desc}
          onChange={handleInputChange}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          value={formData.autor}
          onChange={handleInputChange}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          value={formData.job}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label className="button">
          Subir foto del proyecto
          <input className="addForm__hidden" type="file" />
        </label>
        <label className="button">
          Subir foto de la autora
          <input className="addForm__hidden" type="file" />
        </label>
        <button className="button--large" onClick={handleClickSave}>
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleClickSave: PropTypes.func.isRequired,
};

export default Form;


