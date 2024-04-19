import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../redux/notes/notesSlice";

function Search() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const inputValue = e.target.value;
    const searchValue = inputValue.trim() === "" ? "" : inputValue;
    await dispatch(searchNote(searchValue));
  };
  return (
    <form onChange={handleChange}>
      <div className="mt-5 col-lg-5 col-md-7 col-sm-9 col-xs-12 mx-auto search">
        <button
          className="col-2 fw-light"
          type="search"
          onClick={(e) => e.preventDefault()}
        >
          Search
        </button>
        <input
          className="col-10 fw-light"
          type="search"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
