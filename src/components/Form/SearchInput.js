import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        <input  style={{border:"1px solid green",fontSize:'1.2rem',fontFamily:'"Playfair Display", serif', borderRadius: "100px",width:'470px',height:'50px'}}
          className="form-control me-2"
          type="search"
          placeholder="Search Me"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button style={{fontSize:'1.05rem',width:'50px',  backgroundColor: "green", borderRadius: "190px",color:'black'}} className="btn btn-outline-success" type="submit">
        <i class="fa-solid fa-magnifying-glass fa-beat"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;