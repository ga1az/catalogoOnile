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
              <div key={product.id}>
                <Stack
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  marginTop={2}
                  onClick={() => handleClickOpen(product)}
                >
                  <Stack display="flex" textAlign="start" spacing={1}>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography id="desc" variant="subtitle1" color="gray">
                      {product.description.slice(0, 60) + "..."}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                      ${product.price}
                    </Typography>
                  </Stack>
                  <Stack
                    marginLeft={2}
                    textAlign="center"
                    justifyContent="center"
                  >
                    <img
                      style={{
                        borderRadius: "1rem",
                        border: "1px solid white",
                        boxShadow: "1px",
                        width: "6rem",
                        height: "6rem",
                      }}
                      src={product.image}
                    />
                  </Stack>
                </Stack>
                <Divider sx={{ marginTop: "10px" }} />
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
