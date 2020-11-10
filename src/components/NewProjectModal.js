import React from "react";
import { useFormik } from "formik";

const initialValues = {
  brand: "",
  projectName: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.brand) {
    errors.brand = "This field is required";
  }
  if (!values.projectName) {
    errors.projectName = "This field is required";
  }
  return errors;
};

function NewProjectModal() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="newProject-modal__container__container">
      <div className="newProject-modal">
        <div className="newProject-modal__body">
          <div className="newProject-modal__title">New Project</div>
          <div className="newProject-modal__text">
            <div className="newProject-modal__main-text">
              <form onSubmit={formik.handleSubmit}>
                <div className="create-project-modal__brand">
                  <label
                    className="create-project-modal__brand__label"
                    htmlFor="brand"
                  >
                    Brand*
                  </label>
                  <input
                    id="brand"
                    name="brand"
                    className="create-project-modal__brand__input"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.brand}
                  />
                </div>
                {formik.errors.brand ? (
                    <div className='create-project-modal__error-message'>{formik.errors.brand}</div>
                  ) : null}
                <div className="create-project-modal__project-name">
                  <label
                    className="create-project-modal__project-name__label"
                    htmlFor="projectName"
                  >
                    Project Name*
                  </label>
                  <input
                    id="projectName"
                    name="projectName"
                    className="create-project-modal__project-name__input"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.projectName}
                  />
                </div>
                {formik.errors.projectName ? (
                   <div className='create-project-modal__error-message'>{formik.errors.projectName}</div>
                  ) : null}
                <div className="create-project-modal__project-date">
                  <div className="create-project-modal__start-date">
                    <label
                      className="create-project-modal__start-date__label"
                      htmlFor="startDate"
                    >
                      Start*
                    </label>
                    <input
                      id="start-input"
                      name="startDate"
                      className="create-project-modal__start-date__input"
                      placeholder="Date"
                      type="text"
                    />
                  </div>
                  <div className="create-project-modal__end-date">
                    <label
                      className="create-project-modal__end-date__label"
                      htmlFor="endDate"
                    >
                      End
                    </label>
                    <input
                      id="end-date-input"
                      name="endDate"
                      className="create-project-modal__end-date__input"
                      placeholder="Date"
                      type="text"
                    />
                  </div>
                </div>
                <button className="newProject-modal__button" type="submit">
                  Save
                </button>
                <button className="newProject-modal__button-cancel">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProjectModal;
