import {
  HighlightOffOutlined,
  RemoveOutlined,
  AddOutlined,
} from "@mui/icons-material";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Slide,
  Icon,
  TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { styles } from "./DialogItemCss";

interface Dialog {
  Open: any;
  OnClose: any;
  Data: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogItem = (props: Dialog) => {
  const dispatch = useDispatch();
  const [multiline, setMultiline] = React.useState("");
  const [countItem, setCountItem] = React.useState(1);
  const handleSubmit = (data: any) => {
    data.message = multiline;
    data.count = countItem;
    dispatch(addToCart(data));
    props.OnClose();
  };
  const handlePlusItem = () => {
    setCountItem(countItem + 1);
  };
  const handleMinusItem = () => {
    countItem < 1 ? setCountItem(0) : setCountItem(countItem - 1);
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
              {props.Data.name}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.OnClose}
              aria-label="close"
            >
              <HighlightOffOutlined />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Stack display="flex" padding={2}>
          <Stack>
            <img
              src={props.Data.image}
              style={{ borderRadius: "1rem", height: "12rem", width: "100%" }}
            />
          </Stack>
          <Stack marginTop={2}>
            <Typography variant="h6" fontWeight="bold">
              ${props.Data.price}
            </Typography>
            <Typography
              variant="subtitle1"
              color="gray"
              marginTop={2}
              marginBottom={3}
            >
              {props.Data.description}
            </Typography>
            <TextField
              id="outlined-multiline-static"
              label="Comentarios"
              multiline
              rows={4}
              variant="filled"
              onChange={(e) => setMultiline(e.target.value)}
            />
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
            <Stack
              display="flex"
              flexDirection="row"
              sx={styles.agree}
              alignItems="center"
              gap={3}
            >
              <Icon onClick={handleMinusItem}>
                <RemoveOutlined />
              </Icon>
              <Typography fontSize={25}>{countItem}</Typography>
              <Icon onClick={handlePlusItem}>
                <AddOutlined />
              </Icon>
            </Stack>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleSubmit(props.Data)}
            >
              Agregar al carrito
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default DialogItem;
