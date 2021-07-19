import "./sort.css";
import { sortProducts } from "../redux/products/ProductActions";
import { useDispatch } from "react-redux";

const Sort = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    dispatch(sortProducts(e.target.value));
  };
  return (
    <div className="nav__sort">
      <select className="sort" onChange={handleSort}>
        <option className="sort__item" value="def">
          Sort By: New Arrivals
        </option>
        <option className="sort__item" value="asc">
          Price: High to Low{" "}
        </option>
        <option className="sort__item" value="desc">
          Price: Low to High
        </option>
        <option className="sort__item" value="alpasc">
          Alphabet: A-Z
        </option>
        <option className="sort__item" value="alpdesc">
          Alphabet: Z-A
        </option>
      </select>
    </div>
  );
};

export default Sort;
