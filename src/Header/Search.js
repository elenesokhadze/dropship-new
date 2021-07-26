import Button from "@material-ui/core/Button";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./search.css";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/products/ProductActions";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProducts(input));
  };

  return (
    <div className="header__search">
      <form className="header__input" onSubmit={handleSearch}>
        {" "}
        <input
          itemID="searchQuery"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="searchButton">
          <SearchIcon className="searchIcon" />
        </button>
      </form>

      <Button variant="contained" color="primary">
        ADD TO INVENTORY
      </Button>
      <div className="FAQ__wrapper">
        <HelpOutlineIcon className="FAQ" />
      </div>
    </div>
  );
};

export default Search;
