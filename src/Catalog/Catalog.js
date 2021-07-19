import Product from "./Product";
import "./catalog.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/products/ProductActions";
import { useEffect } from "react";

const Catalog = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="catalog">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          index={product.id}
          title={product.title}
          price={product.price}
          image={product.imageUrl}
          product={product}
        />
      ))}
    </section>
  );
};

export default Catalog;
