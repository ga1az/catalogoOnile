import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ItemOne from "../Items/ItemOne";

export interface DialogCartInterface {}
interface Dialog {
  Open: any;
  OnClose: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogCart = (props: Dialog) => {
  const cartState = useSelector((state: any) => state.cart);
  const items = cartState.cartItems;
  return (
    <Dialog
      open={props.Open}
      onClose={props.OnClose}
      fullScreen
      TransitionComponent={Transition}
    >
      <Stack>
        <AppBar
          position="static"
          sx={{
            position: "relative",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              fontWeight="bold"
            >
              Tu carrito
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.OnClose}
              aria-label="close"
            >
              <HighlightOffIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Stack padding={3}>
          {items.map((item: any) => (
            <Stack key={item.id} marginBottom={2}>
              <ItemOne Product={item} Dialog={true} />
            </Stack>
          ))}
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          position="fixed"
          bottom={0}
          width="100%"
          left={0}
          sx={{ marginBottom: "1rem" }}
        >
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
          >
            Enviar pedido Total: ${cartState.cartTotalAmount}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default DialogCart;
