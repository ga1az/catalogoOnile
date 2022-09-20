import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { DialogCart } from "../DialogCart";

export interface CartInterface {}

const Cart: React.FC<CartInterface> = () => {
  const cartState = useSelector((state: any) => state.cart);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack
      position="fixed"
      bottom={10}
      left={16}
      right={0}
      bgcolor="blue"
      width="90%"
      height="45px"
      justifyContent="center"
      borderRadius={2}
    >
      <Button onClick={handleClickOpen} sx={{ color: "white" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Ver carrito
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" marginLeft={1}>
          ({cartState.cartTotalCuantities})
        </Typography>
      </Button>
      <DialogCart Open={open} OnClose={handleClose} />
    </Stack>
  );
};

export default Cart;
