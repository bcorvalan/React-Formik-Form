import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    brand: '',
    projectName: ''
}

const onSubmit = values => {
    console.log('Form data', values);
}

const validate = values => {
    let errors = {};
    if(!values.brand){
        errors.brand = 'Required';
    }
    if(!values.projectName){
        errors.projectName = 'Required';
    }
    return errors
}


function NewProjectModal() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log('form errors', formik.errors)
    return (
        <div>
             <form onSubmit = {formik.handleSubmit}>
                  <div className='create-project-modal__brand'>
                    <label
                      className='create-project-modal__brand__label'
                      htmlFor='brand'
                    >
                      Brand*
                    </label>
                    <input
                      id='brand'
                      name='brand'
                      className='create-project-modal__brand__input'
                      type='text'
                      onChange ={formik.handleChange}
                      value={formik.values.brand}
                    />
                  </div>
                  {formik.errors.brand ? <div>{formik.errors.brand}</div> : null}
                  <div className='create-project-modal__project-name'>
                    <label
                      className='create-project-modal__project-name__label'
                      htmlFor='projectName'
                    >
                      Project Name*
                    </label>
                    <input
                      id='projectName'
                      name='projectName'
                      className='create-project-modal__project-name__input'
                      type='text'
                      onChange ={formik.handleChange}
                      value={formik.values.projectName}
                    />
                  </div>
                  {formik.errors.projectName? <div>{formik.errors.projectName}</div>:null}
                  <button type = 'submit'>Sumbit</button>
                </form>
        </div>
    )
}

export default NewProjectModal
