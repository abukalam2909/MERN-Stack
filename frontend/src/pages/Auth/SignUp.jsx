import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Button } from 'react-bootstrap';
import * as Yup from "yup";

const SignUp = () => {

    const signUpSchema = Yup.object().shape({
            fullname: Yup.string()
                .min(3, "Full Name must be at least 3 characters")
                .required("Full Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
                .required("Phone is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords must match")
                .required("Confirm Password is required"),
        })
  return (
       <div className="d-flex justify-content-center align-items-center min-vh-100" style={{background: "#ACA3C7"}}>
            <div className="bg-white p-5 rounded-4 shadow-lg" style={{minWidth: 350, width: 400}}>
                <Formik
                        initialValues={{
                            fullname: "",
                            email: "",
                            phone: "",
                            password: "",
                            confirmPassword: ""
                        }}
                        validationSchema={signUpSchema}
                        onSubmit={(values, {resetForm}) => {
                            console.log("Form values", values);
                            resetForm();
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <div className='mb-3'>
                                    <label className='form-label'>Full Name</label>
                                    <Field type="text" name="fullname" className="form-control"/>
                                    <ErrorMessage name="fullname" component="div" className="text-danger"></ErrorMessage>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <Field type="email" name="email" className="form-control"/>
                                    <ErrorMessage name="email" component="div" className="text-danger"></ErrorMessage>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Phone Number</label>
                                    <Field type="text" name="phone" className="form-control"/>
                                    <ErrorMessage name="phone" component="div" className="text-danger"></ErrorMessage>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Password</label>
                                    <Field type="password" name="password" className="form-control"/>
                                    <ErrorMessage name="password" component="div" className="text-danger"></ErrorMessage>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Confirm Password</label>
                                    <Field type="password" name="confirmPassword" className="form-control"/>
                                    <ErrorMessage name="confirmPassword" component="div" className="text-danger"></ErrorMessage>
                                </div>

                                <button 
                                type="submit" 
                                className='btn btn-primary w-100 mt-3'
                                disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Signing up ..." : "Sign Up"}
                                </button>
                            </Form>
                        ) } 
                    </Formik>
                </div>
            </div>
  )
}

export default SignUp