import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
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
    <div key={itemCategory}>
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
          variant="h5"
          component="h1"
          sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
        >
          {itemCategory}
          <Typography variant="body2" component="p">
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
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  boxShadow: 2,
                  margin: "1rem 1rem 0 1rem",
                }}
                key={product.id}
                onClick={() => handleClickOpen(product)}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent>
                    <Typography component="div" variant="h5">
                      {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Box>
                <Stack>
                  <CardMedia
                    component="img"
                    sx={{ width: 128, height: 128 }}
                    image={product.image}
                    alt="Live from space album cover"
                  />
                </Stack>
              </Card>
            ))}
        </div>
      </Stack>
      {/* DIALOG */}
      <DialogItem Open={open} OnClose={handleClose} Data={item} />
    </div>
  );
};
