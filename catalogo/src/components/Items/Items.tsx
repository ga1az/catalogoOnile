import { Stack } from "@mui/material";
import React from "react";
import { itemsCategory, uniqueCategories } from "./ItemsCategory";

export interface ItemsInterface {}

const Items: React.FC<ItemsInterface> = () => {
  return (
    <Stack>{uniqueCategories.map((product) => itemsCategory(product))}</Stack>
  );
};

export default Items;
