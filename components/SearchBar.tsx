import React, { FC } from "react";
import styles from "../styles/SearchBar.module.css";
import { SearchBarProps } from "../types";

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="🔎︎ Search for a city or airport"
        onKeyDown={(e) => e.key === "Enter" && onSearch(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
