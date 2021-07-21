import "./sort.css";
import { sortProducts } from "../redux/products/ProductActions";
import { useDispatch } from "react-redux";
import SortIcon from "@material-ui/icons/Sort";

const Sort = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    dispatch(sortProducts(e.target.value));
  };
  return (
    <div className="nav__sort">
      <SortIcon className="nav__icon" fontSize="small" />
      <select className="sort" onChange={handleSort}>
        <option className="sort__item" value="sort">
          Sort By: New Arrivals
        </option>
        <option className="sort__item" value="asc">
          Price: High to Low{" "}
        </option>
        <option className="sort__item" value="desc">
          Price: Low to High
        </option>
        <option className="sort__item" value="alphAsc">
          Alphabet: A-Z
        </option>
        <option className="sort__item" value="alphDesc">
          Alphabet: Z-A
        </option>
      </select>
    </div>
  );
};

export default Sort;
