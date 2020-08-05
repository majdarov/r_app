import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, useField, Form } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';

const MyInputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
}

const StyledLabel = styled.label`
    font-weight: bold;
    border: 1px blueviolet dashed;
    padding: 3px;
    color: indigo;
`
const StyledButton = styled.button({
    backgroundColor: 'indigo',
    color: 'white'
})

const FormProductFormik = props => {
    return (
        <>
            <Formik
                initialValues={{ 
                    productName: '',
                    description: ''
                }}
                validationSchema={Yup.object({
                    productName: Yup.string()
                        .required('Required')
                        .max(20, 'It`s long Name!!!')
                        .min(4, 'It`s short Name!!')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <MyInputField
                        label="Product Name"
                        name="productName"
                        type="text"
                        placeholder="Doe"
                    />
                    <MyInputField
                        label="Description"
                        name="description"
                        type="text"
                        placeholder="...description"
                    />

                    <StyledButton type="submit">Submit</StyledButton>
                </Form>
            </Formik>
        </>
    );
}

export default FormProductFormik;