import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { dataProducts } from "../../data/products";
import { DialogItem } from "../DialogItem";
import ItemOne from "./ItemOne";

const categories = dataProducts.map((product) => product.category);
export const uniqueCategories = [...new Set(categories)];

//onClick hover item
export const itemsCategory = (itemCategory: any) => {
  const [open, setOpen] = React.useState(false);

  const [item, setItem] = React.useState({});

  const handleClickOpen = (product: any) => {
    setOpen(true);
    setItem(product);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div key={itemCategory} id={itemCategory}>
      <Stack
        display="flex"
        flexDirection="column"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        <Typography
          variant="overline"
          component="h1"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
        >
          {itemCategory}
          <Typography variant="body2" component="p" fontWeight="bold">
            (
            {
              dataProducts.filter((item) => item.category == itemCategory)
                .length
            }
            )
          </Typography>
        </Typography>
        <div>
          {dataProducts
            .filter((item: any) => item.category === itemCategory)
            .map((product) => (
              <div key={product.id} onClick={() => handleClickOpen(product)}>
                <ItemOne Product={product} Dialog={false} />
              </div>
            ))}
        </div>
      </Stack>

      {/* DIALOG */}
      <DialogItem Open={open} OnClose={handleClose} Data={item} />
    </div>
  );
};
function componentDidMount() {
  throw new Error("Function not implemented.");
}
