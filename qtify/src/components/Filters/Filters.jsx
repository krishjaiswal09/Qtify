import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Filters.module.css";

export default function Filters({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  // Function to handle filter change
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  // Function to return accessibility properties
  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={(event, newValue) => handleChange(event, newValue)}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
      >
        {filters.map((ele, idx) => (
          <Tab
            className={styles.tab}
            label={ele.label}
            {...allyProps(idx)}
            key={ele.key}
          />
        ))}
      </Tabs>
    </div>
  );
}
