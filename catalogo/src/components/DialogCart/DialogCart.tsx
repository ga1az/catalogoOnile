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
  const message = () => {
    const msg = items.map((item: any) => {
      return `\n✅${item.name} Cantidad: ${item.count} Subtotal: ${
        item.price * item.count
      } \n Comentario adicional: ${item.message} \n`;
    });
    const total = `\nTotal a pagar: ${cartState.cartTotalAmount}\n Pagar a banco estado: 1234567890`;
    return encodeURIComponent(msg.toString() + total.toString());
  };
  const wspmessage =
    "https://wa.me/56945525930?text=%F0%9F%94%B8%20Hola,%20quiero%20comprar%20los%20siguientes%20productos:" +
    message();
  const handleSend = () => {
    location.href = wspmessage;
  };

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
            onClick={handleSend}
          >
            Enviar pedido Total: ${cartState.cartTotalAmount}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default DialogCart;
