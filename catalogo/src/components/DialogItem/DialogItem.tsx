import { CloseOutlined } from "@mui/icons-material";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
  CardMedia,
} from "@mui/material";
import React from "react";

interface Dialog {
  Open: any;
  OnClose: any;
  Data: any;
}

const DialogItem = (props: Dialog) => {
  const [countItem, setCountItem] = React.useState(1);
  const handlePlusItem = () => {
    setCountItem(countItem + 1);
  };
  const handleMinusItem = () => {
    setCountItem(countItem - 1);
  };
  return (
    <Dialog open={props.Open} onClose={props.OnClose} fullWidth>
      <Stack>
        <Stack>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "20vh" }}
            image={props.Data.image}
            alt="Live from space album cover"
          />
        </Stack>
        <Stack>
          <Typography variant="h5" component="div">
            {props.Data.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {props.Data.price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {props.Data.description}
          </Typography>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack display="flex" flexDirection="row" alignItems="center">
              <Button variant="contained" onClick={handlePlusItem}>
                +
              </Button>
              <Typography variant="subtitle1" color="text.secondary">
                {countItem}
              </Typography>
              <Button variant="contained" onClick={handleMinusItem}>
                -
              </Button>
            </Stack>
            <Button variant="contained">Add to cart</Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default DialogItem;
