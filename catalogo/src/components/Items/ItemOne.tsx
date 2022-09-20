import { Stack, Typography, Divider, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface Dialog {
  Product: any;
  Dialog: boolean;
}

function ItemOne(props: Dialog) {
  const dispatch = useDispatch();
  const handleDelete = (id: String) => {
    dispatch(removeFromCart(id));
  };
  const isDialogCart = () => {
    return (
      <Stack display="flex" flexDirection="row" alignItems="center">
        <Typography variant="subtitle1">Cant: {props.Product.count}</Typography>
        <Typography variant="subtitle1" marginLeft={2}>
          SubTotal: {props.Product.count * props.Product.price}
        </Typography>
        <Button onClick={() => handleDelete(props.Product.id)}>
          <DeleteForeverIcon />
        </Button>
      </Stack>
    );
  };
  return (
    <div key={props.Product.id}>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginTop={2}
      >
        <Stack display="flex" textAlign="start" spacing={1}>
          <Typography variant="h6">{props.Product.name}</Typography>
          <Typography id="desc" variant="subtitle1" color="gray">
            {props.Product.description.slice(0, 60) + "..."}
          </Typography>
          <Stack display="flex" flexDirection="row">
            {props.Dialog ? (
              isDialogCart()
            ) : (
              <Typography variant="subtitle1" fontWeight="bold">
                ${props.Product.price}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack marginLeft={2} textAlign="center" justifyContent="center">
          <img
            style={{
              borderRadius: "1rem",
              border: "1px solid white",
              boxShadow: "1px",
              width: "6rem",
              height: "6rem",
            }}
            src={props.Product.image}
          />
        </Stack>
      </Stack>
      <Divider sx={{ marginTop: "10px" }} />
    </div>
  );
}

export default ItemOne;
