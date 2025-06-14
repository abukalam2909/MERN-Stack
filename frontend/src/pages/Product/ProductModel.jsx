import React from "react";
import { Button, Form } from "react-bootstrap";
import ModelComponent from "../../components/ModelComponent.jsx";
import {Formik} from "formik";
import * as Yup from "yup";

const ProductModel = ({show, onClose, initialValues, onSubmit, isEdit}) => {

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Product name is required"),
    image: Yup.string().required("Image URL is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
  });

  return (
    <>
      <Formik
       initialValues={initialValues}
       enableReinitialize
       validationSchema={validationSchema}
       onSubmit={(values, { resetForm }) => {
         onSubmit(values);
         resetForm();
         onClose();
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
       }) => (
        <ModelComponent
          show={show}
          onClose={onClose}
          onSubmit={handleSubmit}
          title= {isEdit ? "Edit Product" : "Add New Product"}
          submitLabel= {isEdit ? "Update" : "Create"}
        >
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter name"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.title && !!errors.title}
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Enter image url"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.image && !!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.description && !!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="text"
                placeholder="Enter price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.price && !!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </ModelComponent>
       )}
     </Formik>
    </>
  );
};

export default ProductModel;