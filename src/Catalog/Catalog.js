import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getProducts } from "../redux/products/ProductActions";
import Product from "./Product";
import Modal from "./Modal.js";
import "./catalog.css";
import Spinner from "./Spinner";

const Catalog = () => {
  const [spinner, setSpinner] = useState(true);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  const onClose = (event) => {
    event.stopPropagation();
    history.push(`/catalog`);
  };

  const onOpen = (id) => {
    history.push(`/catalog/${id}`);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product = products.find((item) => item.id == id);
  if (spinner) {
    return <Spinner />;
  } else {
    return (
      <section className="catalog">
        {/* <LoadingIndicator /> */}
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            index={product.id}
            title={product.title}
            price={product.price}
            image={product.imageUrl}
            product={product}
            onOpen={onOpen}
          />
        ))}
        {product && <Modal product={product} onClose={onClose}></Modal>}
      </section>
    );
  }
};

export default Catalog;
