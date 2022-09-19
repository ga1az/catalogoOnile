import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { dataProducts } from "../../data/products";
import { uniqueCategories } from "../Items/ItemsCategory";
import { styles } from "./SearcherCss";

export interface SearcherInterface {}

const Searcher: React.FC<SearcherInterface> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={styles.mainBox}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {uniqueCategories.map((product, index) => (
          <Tab label={product} key={index} href={"#" + product} />
        ))}
      </Tabs>
    </Box>
  );
};

export default Searcher;
