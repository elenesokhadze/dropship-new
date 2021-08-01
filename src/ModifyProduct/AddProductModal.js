import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./addProductModal.css";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { addProduct } from "../API";
import { getProducts } from "../redux/products/ProductActions";
import ReactDom from "react-dom";

const productSchema = yup.object({
  title: yup
    .string()
    .required("Required")
    .min(2, "Title must exceed 2 characters"),
  description: yup
    .string()
    .required("Required")
    .min(4, "Description must exceed 4 characters"),
  price: yup.number().integer("Price must be an integer").required("Required"),
  imageUrl: yup.string().url("Input must be a url"),
});

const AddProductModal = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    zIndex: 1000,
    width: 630,
    height: 651,
  };

  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      imageUrl: "",
    },
    onSubmit: (values) => {
      handleProductSubmit(values);
    },
    validationSchema: productSchema,
  });

  const handleProductSubmit = (values) => {
    addProduct(values)
      .then((res) => {
        history.push("/catalog");
        dispatch(getProducts());
      })
      .catch((err) => {});
  };

  const handleClose = (event) => {
    if (event.target !== event.currentTarget) return;
    history.push("/catalog");
  };

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={handleClose}>
        <div style={MODAL_STYLES}>
          <div className="modify-product__title">
            <h2 className="modify-product__title--text">Add Product</h2>
            <i className="fas fa-plus"></i>
          </div>
          <form onSubmit={formik.handleSubmit} className="modify-product__form">
            <TextField
              label="Product Title"
              variant="outlined"
              name="title"
              size="medium"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              style={{ width: "500px", color: "grey", margin: "12px 0px" }}
              color="primary"
            />
            <TextField
              label="Description"
              variant="outlined"
              name="description"
              multiline
              rows={5}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              style={{ width: "500px", color: "grey", margin: "12px 0px" }}
              color="primary"
            />
            <TextField
              label="Price"
              variant="outlined"
              size="medium"
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              InputProps={{
                inputProps: {
                  min: 0,
                },
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              style={{ width: "500px", color: "grey", margin: "12px 0px" }}
              color="primary"
            />
            <TextField
              label="Image Url"
              variant="outlined"
              name="imageUrl"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
              style={{ width: "500px", color: "grey", margin: "12px 0px" }}
              color="primary"
            />
            <div className="modify-product__button">
              <input
                type="button"
                value="Back"
                className=" modify-product__button--blue"
                onClick={handleClose}
              />
              <input
                type="submit"
                value="Save"
                className=" modify-product__button--blue"
              />
            </div>
          </form>
        </div>
      </div>
      {children}
    </>,
    document.getElementById("root")
  );
};

export default AddProductModal;
