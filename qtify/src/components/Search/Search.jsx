import React from "react";
import styles from "../Search/Search.module.css";
import SearchIcon from "../SearchBar/SearchButton"; // Import the SearchIcon component

function Search({ children }) {
  return (
    <div>
      <form
        className={styles.wrapper} // Fixed the className binding
        // onSubmit={(e) => {
        //     onSubmit(e, value)
        // }}
      >
        <input type="text" placeholder="Search a album of your choice" className={styles.search} />
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon /> {/* Use the SearchIcon component */}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
