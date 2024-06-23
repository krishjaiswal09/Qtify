import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import Styles from "../SearchBar/SearchButton.module.css"

export default function SearchIcon() {
    return <img className={Styles.searchIcon}src={searchIcon} alt="logo" width={67} />;
}
